//导入koa
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
//创建一个Koa对象表示webapp
const app = new Koa();
const controller = require('./controller');
var cors = require('koa2-cors');
app.use(cors());
app.use(controller());

//监听3000端口
app.listen(5000);
console.log('app started at port 5000...');
