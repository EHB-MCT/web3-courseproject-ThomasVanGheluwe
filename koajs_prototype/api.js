const Koa = require('koa');
var Router = require('koa-router');
const koaStatic = require('koa-static');

const app = new Koa();
var router = new Router();

router.get('/index', koaStatic('./public'));

app
  .use(koaStatic('./public'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);