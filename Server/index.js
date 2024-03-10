import  express  from "express"
import  CorsRequest from "cors";
import bodyParser from 'body-parser'
// const express = require('express')

import authRouths from './Routs/authRouths.js';
import databaseRouths from './Routs/databaseRouths.js';
import admin  from 'firebase-admin';
import serviceAccount from './kwaiii-bakety-firebase-adminsdk-4bh76-d625cdbacf.json' assert { type: "json" } ;

var firebaseapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  authDomain: "kwaiii-bakety.firebaseapp.com",
  storageBucket: "kwaiii-bakety.appspot.com",
});



const app = express()
const port = 3000

const auth = admin.auth();

app.use(CorsRequest());
app.use(express.json());
app.use(bodyParser.json());
app.use("api/v1/auth",authRouths);
app.use("api/v1/database",databaseRouths);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/test-user-auth',async (req,res) => {
  const {email, password} = req.body;

    try {
        const userstatus = await auth.createUser({
            email,
            password
        });

        res.status(201).json({ message: "user-succefully created", userstatus: userstatus.uid })
    }
    catch (error)
    {
        console.log(error)
        res.status(400).json({ erromsg: "user creation problem" })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})