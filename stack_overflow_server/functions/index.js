// const functions = require("firebase-functions");

//To start with making a server step
//1-touch index.js
//2-npm init
//put boiler plate of backend server
// If you want to use require remove type module from package.json

import express from 'express'
import mongoose from 'mongoose' 
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'
import answerRoutes from './routes/answers.js'
import questionRoutes from './routes/questions.js'
import functions from 'firebase-functions'


import { sendMailtome } from './controllers/auth.js'


//to unable us to develop a server using express
const app = express();

dotenv.config(); // used for using env variable.
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

mongoose.set('strictQuery', true); // supress warning

// used for backend server can work loaclly with chrome 
app.use(cors());

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);

app.post('/contact',sendMailtome);

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

const port = process.env.PORT || 5000
const Database_url = process.env.DATABASE_URL


// const connect = mongoose.createConnection(Database_url,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });

// let gfs;

// connect.once('open',()=>{
//     gfs = new mongoose.mongo.GridFSBucket(connect.db,{
//         bucketName:"uploads"
//     });
//     app.listen(port,()=>{
//         console.log("server is started with mongoose integration on port:",port);
//     })

// })

//backend server with database integration
mongoose.connect(Database_url, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(port,()=>{
        console.log("server is started with mongoose integration on port:",port);
    })
}).catch((err)=>{
    console.log({message:"Server is not started due to some mongoDb error",err:err});
})


//backend server started at a particular port
// app.listen(port,()=>{
//     console.log("server is started on port:",port);
// })


