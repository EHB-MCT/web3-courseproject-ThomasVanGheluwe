//MONGO DB
const dbName = "KoaDemo";

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://admin:admin@cluster0.nrkzu.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Succesfully connected to MongoDB");
//   const collection = client.db(dbName).collection(collectionName);
//   // perform actions on the collection object
//   client.close();
});

module.exports = client;