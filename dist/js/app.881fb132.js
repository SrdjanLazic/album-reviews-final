(function(e){function t(t){for(var s,i,o=t[0],c=t[1],l=t[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01b8":function(e,t,a){"use strict";a("b0d2")},"034f":function(e,t,a){"use strict";a("85ec")},"0469":function(e,t,a){"use strict";a("4948")},"0895":function(e,t,a){"use strict";a("5ea9")},"38aa":function(e,t,a){},4241:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},4948:function(e,t,a){},"502f":function(e,t,a){"use strict";a("65aa")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("d3b7");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{staticClass:"navbar",attrs:{toggleable:"sm",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"name",attrs:{to:"/"}},[a("b-icon-music-note-beamed"),e._v(" MusicDB")],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),a("b-nav-item",{attrs:{to:"/albums"}},[e._v("Albums")]),a("b-nav-item",{attrs:{to:"/artists"}},[e._v("Artists")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[e.token?e._e():a("b-nav-item",{attrs:{to:"/register"}},[e._v("Register")]),e.token?a("b-nav-item",{on:{click:function(t){return e.logout()}}},[e._v("Log Out")]):a("b-nav-item",{attrs:{to:"/login"}},[e._v("Log In")])],1)],1)],1)],1),a("router-view")],1)},r=[],i=a("5530"),o=a("2f62"),c={name:"App",data:function(){return{searchQuery:""}},computed:Object(i["a"])({},Object(o["d"])(["token"])),mounted:function(){localStorage.token&&this.setToken(localStorage.token)},methods:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["removeToken","setToken"])),{},{search:function(e){e.preventDefault()},logout:function(){this.removeToken()}}),sockets:{error:function(e){swal(e)}}},l=c,u=(a("034f"),a("2877")),d=Object(u["a"])(l,n,r,!1,null,null,null),b=d.exports,f=a("5f5b"),m=a("b1e0"),h=a("5132"),p=a.n(h),v=(a("f9e3"),a("2dd8"),a("8c4f")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Header",{attrs:{subtitle:"Featured reviews"}}),e.reviews?a("FeaturedReviews",{attrs:{reviews:e.reviews}}):e._e()],1)},g=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"naslov"},[e.subtitle?a("h3",[e._v(e._s(e.subtitle))]):e._e()])},k=[],y={name:"Header",props:{subtitle:String}},_=y,O=(a("d705"),Object(u["a"])(_,w,k,!1,null,"787e9674",null)),A=O.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},e._l(e.randomReviews,(function(t){return a("b-card",{key:t.id,staticClass:"card"},[a("b-card-title",[a("b-icon-chat-quote-fill",{staticClass:"icon"})],1),a("b-card-header",{staticClass:"header",attrs:{id:t.album.id},on:{click:e.openAlbum}},[e._v(" "+e._s(t.album.artist.name)+" - "+e._s(t.album.title)+" ")]),a("b-card-text",[e._v(" "+e._s(t.body)+" ")]),a("b-card-footer",[e._l(t.rating,(function(e){return a("b-icon-star-fill")})),a("span"),e._v(" "+e._s(e._f("formatDate")(t.createdAt))+" ")],2)],1)})),1)},x=[],C=(a("fb6a"),a("4e82"),{name:"FeaturedReviews",props:{reviews:Array},computed:{randomReviews:function(){return this.reviews.sort((function(){return.5-Math.random()})).slice(0,3)}},methods:{openAlbum:function(e){this.$router.push({name:"SingleAlbum",params:{id:e.target.id}})}}}),P=C,z=(a("877c"),Object(u["a"])(P,S,x,!1,null,"03b1c0e8",null)),R=z.exports,$={name:"Home",components:{FeaturedReviews:R,Header:A},computed:Object(i["a"])({},Object(o["d"])(["reviews"])),methods:Object(i["a"])({},Object(o["b"])(["fetchReviews","fetchAlbums"])),mounted:function(){this.fetchReviews(),this.fetchAlbums()}},E=$,T=Object(u["a"])(E,j,g,!1,null,null,null),D=T.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Create account"}}),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"form"},[a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Enter password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)])],1)},I=[],H={name:"Register",components:{Header:A},data:function(){return{form:{email:"",password:"",role:"user"}}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["register"])),{},{onSubmit:function(e){e.preventDefault(),this.register(this.form),this.$router.push({name:"Home"})}})},q=H,M=(a("0895"),Object(u["a"])(q,B,I,!1,null,"a92cba2a",null)),N=M.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Log In"}}),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"form"},[a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter your email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Enter your password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)])],1)},J=[],Y={name:"Login",components:{Header:A},data:function(){return{form:{email:"",password:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["login"])),{},{onSubmit:function(e){e.preventDefault(),console.log(this.form),this.login(this.form),this.$router.push({name:"Home"})}})},F=Y,U=(a("0469"),Object(u["a"])(F,L,J,!1,null,"508a9159",null)),G=U.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("b-pagination",{attrs:{pills:"",size:"md","total-rows":e.albums.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{staticClass:"table",attrs:{id:"image-table",hover:"",fixed:"",items:e.albums,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),a("b-pagination",{attrs:{pills:"",size:"md","total-rows":e.albums.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},K=[],V={name:"Albums",data:function(){return{fields:[{key:"title",sortable:!0},{key:"artist.name",label:"Artist",sortable:!0},{key:"genre",sortable:!0},{key:"year",sortable:!0}],currentPage:1,perPage:7}},mounted:function(){this.fetchAlbums()},computed:Object(i["a"])({},Object(o["d"])(["albums"])),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchAlbums"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleAlbum",params:{id:e.id}})}})},W=V,X=(a("502f"),Object(u["a"])(W,Q,K,!1,null,"9c2979fa",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("b-pagination",{attrs:{pills:"",size:"md","total-rows":e.artists.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{attrs:{id:"image-table",hover:"",fixed:"",items:e.artists,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),a("b-pagination",{attrs:{pills:"",size:"md","total-rows":e.artists.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},te=[],ae={name:"Artists",data:function(){return{fields:[{key:"name",sortable:!0}],currentPage:1,perPage:7}},mounted:function(){this.fetchArtists()},computed:Object(i["a"])({},Object(o["d"])(["artists"])),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchArtists"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleArtist",params:{id:e.id}})}})},se=ae,ne=(a("d100"),Object(u["a"])(se,ee,te,!1,null,"536df406",null)),re=ne.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.album?a("SingleAlbumCard",{attrs:{album:e.album}}):e._e(),e.album?a("Reviews",{attrs:{album:e.album}}):e._e()],1)},oe=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"row text-center"},[a("b-card",{staticClass:"mb-2 shadow p-3 mb-5 bg-white rounded card",staticStyle:{"max-width":"20rem"},attrs:{title:e.album.title,"img-src":e.album.albumArtURL,"img-alt":"Image","img-top":"",tag:"article"}},[a("h4",[a("strong",{staticClass:"artistName",attrs:{id:e.album.artist.id},on:{click:e.openArtist}},[e._v(e._s(e.album.artist.name))])]),a("b-card-text",[a("p",{attrs:{id:"year"}},[e._v("Year: "+e._s(e.album.year))]),a("p",[e._v("Genre: "+e._s(e.album.genre))])])],1)],1)])},le=[],ue={name:"SingleAlbum",props:{album:Object},methods:{openArtist:function(e){this.$router.push({name:"SingleArtist",params:{id:e.target.id}})}}},de=ue,be=(a("9269"),Object(u["a"])(de,ce,le,!1,null,"1fd8e48f",null)),fe=be.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("h4",[e._v("Reviews")]),e.token?a("div",[a("b-form-textarea",{attrs:{required:"",state:e.reviewState,placeholder:"Say something..."},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" This field can't be empty. ")]),a("div",{staticClass:"rating"},[a("b-form-rating",{attrs:{"no-border":"","show-clear":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("div",{staticClass:"button-div"},[a("b-button",{attrs:{variant:"outline-dark"},on:{click:e.saveReview}},[e._v("Post review")])],1),e._l(e.album.reviews,(function(t){return a("b-card-group",{key:t.id,attrs:{deck:""}},[a("b-card",{staticClass:"shadow-sm p-1 mb-1 bg-white rounded card",attrs:{align:"center"}},[a("b-card-title",[a("b-icon-chat-quote-fill",{staticClass:"icon"})],1),e._v(" "+e._s(t.body)+" "),a("br"),a("div",{staticClass:"footer"},[e._l(t.rating,(function(e){return a("b-icon-star-fill")})),a("span"),e._v(" "+e._s(e._f("formatDate")(t.createdAt))+" ")],2),a("b-card-title",[a("b-icon-pencil-fill",{staticClass:"edit",attrs:{id:t.id},on:{click:e.editReview}})],1)],1)],1)}))],2):a("p",[e._v("You must be signed in to leave a review.")])])},he=[],pe={name:"Reviews",props:{album:Object},computed:Object(i["a"])(Object(i["a"])({},Object(o["d"])(["token","reviews"])),{},{reviewState:function(){return this.review.length>0}}),data:function(){return{review:"",value:null}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["postReview","fetchAlbums"])),{},{saveReview:function(){""!==this.review&&null!==this.value?(this.$socket.emit("review",{body:this.review,rating:this.value,albumId:this.album.id,token:this.token}),this.review="",this.value=null):swal("Please fill in all the fields first.")},editReview:function(e){this.$router.push({name:"EditReview",params:{id:e.currentTarget.id}})}}),mounted:function(){this.fetchAlbums()}},ve=pe,je=(a("77d1"),Object(u["a"])(ve,me,he,!1,null,"99965bf2",null)),ge=je.exports,we={name:"Single",components:{Reviews:ge,SingleAlbumCard:fe},computed:Object(i["a"])({},Object(o["d"])(["album"])),methods:Object(i["a"])({},Object(o["b"])(["fetchAlbumByID"])),mounted:function(){this.fetchAlbumByID(this.$route.params.id)}},ke=we,ye=Object(u["a"])(ke,ie,oe,!1,null,"62dfa854",null),_e=ye.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.artist?a("ArtistAlbums",{attrs:{artist:e.artist,albums:e.albums}}):e._e()},Ae=[],Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("h1",[e._v(e._s(e.artist.name))]),a("div",{staticClass:"container-fluid"},[a("b-container",[e.artist.albums.length>0?a("b-row",e._l(e.artist.albums,(function(t){return a("b-col",{key:t.id,staticClass:"albums"},[a("b-img",{staticClass:"shadow p-1 mb-4 bg-white rounded img",attrs:{id:t.id,thumbnail:"",fluid:"",src:t.albumArtURL,width:"300",alt:"Image 1"},on:{click:e.openAlbum}}),a("h5",[e._v(e._s(t.title))])],1)})),1):a("b-row",[a("b-col",[a("h5",[e._v("No albums to show. 😢")])])],1)],1)],1)])},xe=[],Ce={name:"ArtistAlbums",props:{artist:Object,albums:Array},methods:{openAlbum:function(e){this.$router.push({name:"SingleAlbum",params:{id:e.target.id}})}}},Pe=Ce,ze=(a("eda4"),Object(u["a"])(Pe,Se,xe,!1,null,"20d4aa66",null)),Re=ze.exports,$e={name:"SingleArtist",components:{ArtistAlbums:Re},computed:Object(i["a"])({},Object(o["d"])(["artist","albums"])),methods:Object(i["a"])({},Object(o["b"])(["fetchArtistByID","fetchAlbums"])),mounted:function(){this.fetchArtistByID(this.$route.params.id),this.fetchAlbums()}},Ee=$e,Te=Object(u["a"])(Ee,Oe,Ae,!1,null,"83f6d626",null),De=Te.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("b-form-textarea",{attrs:{required:"",state:e.reviewState,placeholder:"Say something..."},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" This field can't be empty. ")]),a("div",{staticClass:"rating"},[a("b-form-rating",{attrs:{"no-border":"","show-clear":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("div",{staticClass:"button-div"},[a("b-button",{on:{click:e.saveReview}},[e._v("Save review")])],1)],1)},Ie=[],He={name:"EditAlbum",data:function(){return{review:"",value:null}},computed:{reviewState:function(){return this.review.length>0}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["putReview"])),{},{saveReview:function(){""!==this.review&&null!==this.value?(this.putReview({obj:{body:this.review,rating:this.value},id:this.$route.params.id}),this.$router.back()):swal("Please fill in all the fields first.")}})},qe=He,Me=(a("01b8"),Object(u["a"])(qe,Be,Ie,!1,null,"197a8030",null)),Ne=Me.exports;s["default"].use(v["a"]);var Le=[{path:"/",name:"Home",component:D},{path:"/register",name:"Register",component:N},{path:"/login",name:"Login",component:G},{path:"/albums",name:"Albums",component:Z},{path:"/artists",name:"Artists",component:re},{path:"/album/:id",name:"SingleAlbum",component:_e},{path:"/artist/:id",name:"SingleArtist",component:De},{path:"/review/edit/:id",name:"EditReview",component:Ne}],Je=new v["a"]({mode:"history",base:"/",routes:Le}),Ye=Je;a("e9c4");s["default"].use(o["a"]);var Fe=new o["a"].Store({state:{token:"",albums:[],artists:[],album:null,artist:null,reviews:[]},mutations:{setToken:function(e,t){e.token=t,localStorage.token=t},removeToken:function(e){e.token="",localStorage.token=""},addAlbums:function(e,t){e.albums=t},addArtists:function(e,t){e.artists=t},addReviews:function(e,t){e.reviews=t},getAlbumByID:function(e,t){e.album=t},getArtistByID:function(e,t){e.artist=t},addReview:function(e,t){var a=e.albums.filter((function(e){return e.id===t.albumId}))[0];a&&a.reviews.push(t)}},actions:{fetchAlbums:function(e){var t=e.commit;fetch("http://localhost:8082/admin/albums",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addAlbums",e)}))},fetchAlbumByID:function(e,t){var a=e.commit;fetch("http://localhost:8082/admin/album/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getAlbumByID",e)}))},fetchArtistByID:function(e,t){var a=e.commit;fetch("http://localhost:8082/admin/artist/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getArtistByID",e)}))},fetchArtists:function(e){var t=e.commit;fetch("http://localhost:8082/admin/artists",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addArtists",e)}))},fetchReviews:function(e){var t=e.commit;fetch("http://localhost:8082/admin/reviews",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addReviews",e)}))},postReview:function(e,t){e.commit;fetch("http://localhost:8082/admin/reviews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg&&swal("Error!",e.msg,"error")}))},putReview:function(e,t){e.commit;var a=t.obj,s=t.id;fetch("http://localhost:8082/admin/review/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){e.msg&&swal("Error!",e.msg,"error")}))},socket_review:function(e,t){var a=e.commit,s=JSON.parse(t);a("addReview",s)},register:function(e,t){var a=e.commit;fetch("http://127.0.0.1:8081/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return a("setToken",e.token)}))},login:function(e,t){var a=e.commit;fetch("http://127.0.0.1:8081/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg?alert(e.msg):a("setToken",e.token)}))}},modules:{}}),Ue=a("c1df"),Ge=a.n(Ue),Qe=a("f9d5"),Ke=a.n(Qe);s["default"].use(f["a"]),s["default"].use(m["a"]),s["default"].use(Ke.a),s["default"].use(new p.a({debug:!1,connection:"ws://localhost:8080",vuex:{store:Fe,actionPrefix:"socket_"}})),s["default"].config.productionTip=!1,s["default"].filter("formatDate",(function(e){if(e)return Ge()(String(e)).format("DD.MM.YYYY")})),new s["default"]({router:Ye,store:Fe,render:function(e){return e(b)}}).$mount("#app")},"5ea9":function(e,t,a){},"65aa":function(e,t,a){},"77d1":function(e,t,a){"use strict";a("4241")},"7df2":function(e,t,a){},"7e66":function(e,t,a){},"85ec":function(e,t,a){},"877c":function(e,t,a){"use strict";a("7e66")},9269:function(e,t,a){"use strict";a("7df2")},ade8:function(e,t,a){},b0d2:function(e,t,a){},b81b:function(e,t,a){},d100:function(e,t,a){"use strict";a("ade8")},d705:function(e,t,a){"use strict";a("b81b")},eda4:function(e,t,a){"use strict";a("38aa")}});
//# sourceMappingURL=app.881fb132.js.map