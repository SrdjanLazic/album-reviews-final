const express = require('express');
const { sequelize, Users } = require('../models');
const jwt = require('jsonwebtoken');
const { userCheck, passwordUpdateCheck } = require('../validation');
require('dotenv').config();
const bcrypt = require('bcrypt');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ msg: err });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ msg: err });
        req.user = user;
        next();
    });
}

// route.use(authToken);

route.get('/users', (req, res) => {
    Users.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err));
});

route.get("/user/:id", (req, res) => {

    Users.findOne({ where: { id: req.params.id }}) 
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.delete("/user/:id", authToken, (req, res) => {

    Users.findOne({where: {id: req.user.userId}})
        .then(user => {
            if(user.role == "admin"){
                Users.findOne({where: {id: req.params.id}})
                    .then(u => {
                        if(u.role == "moderator" || u.role == "user"){
                            u.destroy()
                                .then( rows => res.json(rows) )
                                .catch( err => res.status(500).json(err));
                        } else {
                            res.status(403).json({ msg: "Only users and moderators can be deleted."})
                        }
                    })
                    .catch(err => res.status(500).json(err))
            }
            else {
                res.status(403).json({ msg: "Only admin can delete users."});
            }
        }) 
});

route.put("/user/:id", authToken, (req, res) => {
    Users.findOne({ where: { id: req.user.userId } })
        .then(user => {
            if(req.body.id == user.id){
                const check = passwordUpdateCheck.validate(req.body);
                if(check.error){
                    res.status(422).json({ msg: check.error.message });
                } else {
                    Users.findOne({where: {id: req.params.id}})
                        .then(user => {
                            user.password = bcrypt.hashSync(req.body.password, 10)
                            user.save()
                                .then( rows => res.json(rows) )
                                .catch( err => res.status(500).json(err));
                        })
                        .catch(err => res.status(500).json(err))
                    }
                }
                else {
                    res.status(403).json({ msg: "You can only change your own password."});
                }
        })
        .catch(err => res.status(500).json(err))
});



module.exports = route;