const express = require('express')
const { append } = require('express/lib/response')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000


const middleWareLogger = (req, res, next) => {
    console.log('MiddleWare logger berjalan');
    next();
}

const checkPetSpecies = (req, res, next) => {
    if (req.body['species'] === 'Kucing' || req.body['species'] === 'Anjing' || req.body['Kelinci']){
        next()
    }else{
        res.send({
            error_code: 400,
            message: 'Species Invalid'
        })
    }
}
app.use(express.json())


const hewan = [
    {id:1, nama:'Snowy', species:'Kucing'},
    {id:2, nama:'Blacki', species:'Anjing'},
    {id:3, nama:'Molly', species:'Kucing'},
    {id:4, nama:'Milo', species:'Kelinci'},
    {id:5, nama:'Rere', species:'Kucing'}
]

app.use(middleWareLogger)

app.get('/hewan', (req, res) => {
    
    res.status(200).json({
        message:"successful",
        hewan: hewan
    })
})

app.post('/hewan', checkPetSpecies, (req, res) => {
    const hewanNew = {
        id: hewan.length + 1,
        nama: req.body['nama'],
        species: req.body['species']
    }
    hewan.push(hewanNew)
    res.send({
        message: "data terkirim",
        hewan : hewan,
    // }).status(400).catch(error => {
    //     res.send({
    //         message: 'error code 400'
    //     })
     })
}
       
) 

app.get('/hewan/:id', (req, res) => {
    res.status(200).json({
        message: "Successfull get by Id",
        hewanFilter: hewan[(req.params.id - 1)]
    })

})

app.patch('/hewan/:id', (req, res) =>{
    const hewanPatch = {
        id: req.body[req.params.id],
        nama: req.body['nama'],
        species: req.body['species']
    }

    hewan.splice((req.params.id - 1), 0, hewanPatch)

    res.send({
        message: ' Updated'
    })
})


app.delete('/hewan/:id', async (req, res) => {
    hewan.splice((req.params.id - 1), 1)
    res.status(200).json({
        message : "deleted"
    }).catch(error => {
        res.send({
            message : error
        })

    })

})

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`)
})