// Express
const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const {newReviewCheck} = require("./validation");
const app = express();
const history = require('connect-history-api-fallback');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT'],
        credentials: true
    },
    allowEIO3: true
});

// Modeli
const { sequelize, Reviews, Albums, Users, Artists } = require('./models');


// Path, JWT, .env
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config();


function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.redirect(301, '/login');
        req.user = user;
        console.log(user);
        next();
    });
}

function authSocket(msg, next) {
    if (msg[1].token == null) {
        next(new Error("Not authenticated"));
    } else {
        jwt.verify(msg[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                next(new Error(err));
            } else {
                msg[1].user = user;
                next();
            }
        });
    }
}

io.on('connection', socket => {
    socket.use(authSocket);
 
    socket.on('review', rev => {

        Users.findOne({ where: { id: rev.user.userId } })
            .then(user => {
                if(user.role == "user"){
                    console.log(rev);
                    const check = newReviewCheck.validate(rev);
                    if(check.error){
                        res.status(422).json({ msg: check.error.message });
                    }
                    else {
                        Albums.findOne({where: {id: rev.albumId}})
                            .then(album => {
                                Reviews.create({ body: rev.body, rating: rev.rating, albumId: rev.albumId, userId: rev.user.userId})
                                        .then( rows => {
                                            console.log(rows);
                                            Reviews.findOne({where: {id: rows.id}})
                                            .then(rev => io.emit('review', JSON.stringify(rev)))
                                        })
                                        .catch( err => res.status(500).json(err) );
                            })
                            .catch(err => res.status( ).json(err))
                        }
                    }
                    else {
                        res.status(403).json({ msg: "Only users can review albums."}); 
                    }
                })
                .catch(err => res.status(500).json(err));
    });

    socket.on('error', err => socket.emit('error', err.message) );
});

// app.get('/register', (req, res) => {
//     res.sendFile('register.html', { root: './static' });
// });

// app.get('/login', (req, res) => {
//     res.sendFile('login.html', { root: './static' });
// });

// app.get("/", authToken, (req, res) =>{
//     res.sendFile('index.html', { root: './static' });
// });

//app.use(express.static(path.join(__dirname, 'static'))); 

const staticMiddleware = express.static(path.join(__dirname, 'dist'));
app.use(staticMiddleware);  
app.use(history({index: '/index.html'})); 
app.use(staticMiddleware);  

server.listen({ port: 8080 }, async () => {
    await sequelize.authenticate();
    console.log("App listening on port 8080");
});