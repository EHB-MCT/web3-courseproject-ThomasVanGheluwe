const Router = require("@koa/router");

const {createPerson, getPersons, getPerson, updatePerson, deletePerson} = require('../API/data.api');

//Defines router
const router = new Router({
  prefix: '/data'
});


//GET request
router.get('/', async ctx =>{
    ctx.body = await getPersons();
});

//GET request by id
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getPerson(id);
});

//POST request
router.post('/', async ctx =>{
    //Get the person details from the body
    let person = ctx.request.body;
    person = await createPerson(person);
    ctx.response.status = 200;
    ctx.body = person;
    console.log("log", person);
    
});

//DELETE request
router.delete('/:id', async ctx =>{
    const id = ctx.params.id;
    await deletePerson(id);
});

//UPDATE request

router.put('/:id', async ctx =>{
    //get id from url
    const id = ctx.params.id;
    //get person from body
    let person = ctx.request.body;
    person = await updatePerson(id, person);
    if(ctx.response.status = 200){
        ctx.body = person;
    }
});

//export router
module.exports = router;



