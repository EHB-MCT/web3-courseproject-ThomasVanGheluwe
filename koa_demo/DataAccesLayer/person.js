const dbName = "KoaDemo";
const collectionName = "data";

const person = require('./index').db(dbName).collection(collectionName);

const ObjectId = require('mongodb').ObjectID;   

const save = async (object) => {
    const result = await person.insertOne({name: object.name, age: object.age});
    //returns the data
    return result.ops[0];
};

const getAllPersons = async () => {
  const allData = await person.find();
  return allData.toArray();   
};

const getPersonById = async id => {
    return await person.findOne({_id: ObjectId(id)});
};

const update = async (id, {name, age}) => {
    const result = await person.replaceOne({_id: ObjectId(id)}, {name, age});
    return result.ops[0];
};

const removeById = async id => {
    await person.deleteOne({_id: ObjectId(id)});
};

//Export functions
module.exports = {save, getAllPersons, getPersonById, update, removeById};