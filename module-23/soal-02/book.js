const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const PORT = 4000


const userData = [ 
    {
        user:'admin',
        password: 'admin',
        role: 'admin'
     },
    {
        user:'member',
        password:'member',
        role:'member'
    }];

const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
    ];


    const accessTokenSecret = 'youraccesstoken'

    const authenticateJWT = (req, res, next) =>{
    //     const authHeader = req.headers.authorization

    //     if(authHeader){
    //         const token = await res.json()
        
        
    //     jwt.verify(token, accessTokenSecret, (err, user) => {
    //         if(err){
    //             return res.sendStatus(403);

    //         }
    //             req.user = user;
    //             next();


    //     });
    // }else{
    //     res.sendStatus(401);
    // }

    const token = req.cookies.access_token
   
    if(token){
        jwt.verify(token, accessTokenSecret)
        next()
    }else{
        res.sendStatus(403)
    }
}



    app.use(bodyParser.json(), cookieParser())

    // Get Books! !(Login terlebih dahulu) 
    app.get('/books', authenticateJWT, (req, res) => {
        res.send(books)
    })

    // Update Array Books !(login Terlebih dahulu)

    app.post('/books', authenticateJWT, (req, res) => {
        const pangkat = userData.find(a => { return a.user === 'admin' && a.role === 'admin'})
        if(pangkat){
            const bookData = req.body
            books.push(bookData);
            res.send({
                message: "Updated"
            })  
        }else{
            res.sendStatus(403)
        }
    })

    //Login dan menyimpan Token ke cookie

    app.post('/login', (req, res) => {
        const {user, password} = req.body
        const userDataFil = userData.find(a => { return a.user === user && a.password === password})
        if(userDataFil){
           const token = jwt.sign({user, password}, accessTokenSecret)
           res.cookie("access_token", token )
           res.json(token)

        }else(
            res.send({
                message : "invalid Login Data"
            })
        )
    })

    //Jika di test ada bug, coba get /logout

    app.get('/logout', (req, res) => {
        res
        .clearCookie("access_token")
        .status(200)
        .json({
            message: "bye"
        })
    })

    app.listen(PORT, () => {
        console.log('Server Listen on Port', PORT)
    })