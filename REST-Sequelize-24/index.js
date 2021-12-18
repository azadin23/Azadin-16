const express = require('express')
const app = express()
const Sequelize = require('sequelize')
// Cara yang diminta berbeda
// const HewanModel = require('./models').Hewan
const mysql = require('mysql2')


const PORT = 8000


app.use(express.json())
app.use(express.urlencoded({extended : true}))


//Buat Sebuah Database dengan format di bawah ini

const connection = new Sequelize('database_development', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
} )


connection.authenticate()
        .then(()=>{console.log('Connection Established');})
        .then(()=>{Hewan.sync().then(()=> console.log('table Hewan created'))})
        .catch(err => {
            console.error('Unable to connect to Server', err)
        } )

        const Hewan = connection.define("hewans",{
            nama: Sequelize.DataTypes.STRING,
            namaSpesies: Sequelize.DataTypes.STRING,
            umur: Sequelize.DataTypes.INTEGER
        });
    


app.get('/hewan', async function (req, res) {
    try{
        const hewan = await Hewan.findAll();

        res.status(200).json(hewan)
    }catch(error){
        res.status(500).json({
            message: error.message || 'internal server error'
        })
    }
});



app.get('/hewan/:hewanId', async function (req, res) {
    try{
        const { hewanId } = req.params;
        const hewan = Hewan.findOne({ id : Number(hewanId)});

        res.status(200).json(hewan)
    }catch(error){
        res.status(500).json({
            message: error.message || 'internal server error'
        })
    }
})


app.post('/hewan', async function (req, res) {
    try{
        const {nama, namaSpesies, umur} = req.params;

        const newHewan = {
            nama: nama,
            namaSpesies: namaSpesies,
            umur: umur
        }


        const newInput = await Hewan.create(newHewan);

        res.status(200).send({
            message: "data added succesfully",
            todo:newInput
        })
    }catch(error){
        res.send({
            message: error.message || 'Internal Server Error'
        })
    }

})



app.patch('/hewan/:hewanId', async function (req, res){
    try{
        const { hewanId } = req.params;
        const {nama, namaSpesies, umur} = req.params;

        const updateHewan = {
            nama:nama,
            namaSpesies: namaSpesies,
            umur: umur
        }

        const updatedData = await Hewan.update(updateHewan,{
            where: {
                id:hewanId
            }
        });

        res.status(200).json({
            message: 'Updated',
            hewan:updatedData
        })
    }catch(error){
        res.status(400).json({
            message: error.message || 'internal server error'
        })  
    }
})


app.delete('/hewan/:hewanId', async function (req, res) {
      try{  const { hewanId } = req.params;

            await Hewan.destroy({
                where : {
                    id: hewanId,
                }
            })

            res.status(200).json({
                message: 'Data Deleted' 
            })
        }catch (error){
            res.send({
                message: error.message || 'internal server error'
            })
        }
})



app.listen(PORT, (req, res) =>{
    console.log(`Server Running on ${PORT}`)
})