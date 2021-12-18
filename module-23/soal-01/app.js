const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()

const PORT = 8000

const myusername = "user1"
const mypassword = "mypassword"

var session;



app.use(sessions({
        secret: "Syaipuddinldapdkapkda",
        saveUninitialized: true,
        cookie: {maxAge : 1000 * 60},
        resave : false
}))

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static("view"))


app.use(cookieParser())



app.get('/', (req, res) =>{
        session = req.session
        if(session.userid){
                res.send(`Welcome <a href ='/logout'> Click to logout </a>`)
        }else{
                res.sendFile('view/index.html', {root :"./"})
        }
})



app.post('/user', (req, res) =>{
        if(req.body.username == myusername && req.body.password == mypassword){
                session = req.session;
                session.userid = req.session.username;
                console.log(req.session);
                res.send(`Welcome , <a href='/logout'> click to logout </a>`)
        }else{
                
                res.send("Username and Password invalid")}
})


app.get('/logout', (req, res) =>{
        req.session.destroy();
        res.redirect('/');
})


app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
})