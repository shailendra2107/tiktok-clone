import express from 'express'
import mongoose from 'mongoose'

import Data from './data.js'

import Videos from './db.js'



//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use((req, res, next) => {
    res.setHeaders("Access-Control-Allow-Origin", "*")
    res.setHeaders("Access-Control-Allow-Headers", "*")

    next();
})

//DB  config
mongoose.connect("mongodb://localhost:27017/tiktok", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful');
}).catch((error) => {
    console.log(error);
})

//api endpoint
app.get('/', (req, res) => {
    res.status(201).send("hey i am in tiktok Backend")
})

app.get('/v1/posts', (req, res) => {
    res.status(201).send(Data)
})

app.get('/v2/posts', (req, res) => {

    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)

        }
    })
})

app.post('/v2/posts', (req, res) => {

    const dbVideo = (req.body)

    Videos.create(dbVideo, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)

        }
    })
})


//app listing
app.listen(port, () => {
    console.log(`Listning on Port No. is ${port}`);

})