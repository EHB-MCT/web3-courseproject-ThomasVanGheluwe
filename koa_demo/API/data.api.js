const {save, getAllPersons, getPersonById, update, removeById} = require('../DataAccesLayer/person');


//Map the save() method
const createPerson = async (name, age) =>{
    //create person object
    const person = {
        name: name,
        age: age
    };
    //calls save() method and pass person object
    return await save(person.name, person.age);
};

//Map the getAll() method
const getPersons = async () => {
    return await getAllPersons();
};

//Map the getPersonById() method
const getPerson = async id => {
    return await getPersonById(id);
};


//Map the update() method
const updatePerson = async (id, name, age) => {
    const person = {
        name: name,
        age: age
    };
    return await update(id, person.name, person.age);
};

//Map the removeById() method
const deletePerson = async id => {
    return removeById(id);
};

module.exports = {createPerson, getPersons, getPerson, updatePerson, deletePerson};