"use strict";


//REQUIREMENTS
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const reqRouter = express.Router();
let db;
const dbName = "PrototypeBackend";
const collectionName = "items";

//MongoDB
const {MongoClient, ObjectId}  = require('mongodb');                                                                                     
const url = `mongodb+srv://admin:admin@cluster0.nrkzu.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});




//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//REQUESTS
app.use('/', reqRouter)

//get htmlpage
.get('/index',(req, res) => {
    res.sendFile(__dirname + '/public/index.html');  //use dirname instead of full directory path
})

//get kwadraat met single parameter
.get('/multiply:number', (req, res) => {
    const {number} = req.params;
    res.json({result: number*number});
})

//get kwadraat met querry parameter
.get('/multiply', (req, res) => {
    const number = req.query.number;
    res.json({result: number*number});
})

//post saved text file in public folder
.post('/save', (req,res) => {
    const data = req.body;
    fs.writeFile('./public/text.txt', data.text, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        // success case, the file was saved
        console.log('File correctly saved');
        res.send('Data saved:' + data.text);
    });
})

.post('/createObject', (req, res) => {
    const object = req.body;
    db.collection(collectionName).insertOne(object, (error, result) => {
        if(error){
            return res.status(500).send(error);
            }
            res.send("Object created: " + JSON.stringify(object));
    });
})


//update whole object in mongoDB
.put('/updateObject', (req, res) => {
    const object = req.body;
    //console.log(object);
    const querry = {_id: ObjectId(object.id)};
    const updateDocument = {
        $set: {title: object.title,
            price: object.price
        }
    };
    db.collection(collectionName).updateOne(querry, updateDocument);

    res.send("Object updated:" + JSON.stringify(object));
})

//update single field (price) of object in mongoDB
.put('/updatePrice', (req, res) => {
    const object = req.body;
    //console.log(object);
    const querry = {_id: ObjectId(object.id)};
    const updateDocument = {
        $set: {price: object.price}
    };
    db.collection(collectionName).updateOne(querry, updateDocument);

    res.send("Field updated, price :" + JSON.stringify(object.price));
})

.delete('/delete', (req, res) => {
    const object = req.body;
    const query = {title: object.title};    
    db.collection(collectionName).deleteOne(query);

    res.send("Object deleted: " + JSON.stringify(object));
});



//Start localhost & connect mongoDB
app.listen(port, () => {
    console.log(`Running on port ${port}`);
    client.connect( err => {
        if(err){
            throw err;
        }
        db = client.db(dbName);
        console.log(`Connected to: ${dbName}`);
    });
});
