const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jwt = require('jsonwebtoken')
const PORT = 3000


const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    },
    {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
];


const accessTokenSecret =  'youraccesstokensecret'

// app.use(express,json())
// app.use(express.static("root"))
// app.use(express.urlencoded({ extended : true}))

app.use(bodyParser.json())




app.post('/login', (req, res) => {
   const {username, password} = req.body
   const idPass = users.find((a) => {a.username === username && a.password === password})
   if (idPass) {
       const aToken = jwt.sign({username : idPass.username, role: idPass.role}, accessTokenSecret)
       res.json({aToken})
   } else (res.send({
       message: "Invalid Username and Password"
   })
   )

})

app.listen(PORT, () => {
    console.log("Running on", PORT)
})