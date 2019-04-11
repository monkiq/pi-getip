var fn_index = async(ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name:<input name="name" value="koa"></p>
        <p>Password:<input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
};
var fn_siginin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};
var getip = function(){
    return new Promise(resolve => {var ssh2 = require('ssh2-utils');
    var ssh = new ssh2();
    var server = {host: "192.168.6.1", username:"admin", password:"admin" };
    ssh.exec(server, 'ip addr', function(err,stdout,stderr){
        if(err) console.log(err);
        var res = stdout.match(/(10\.69\.\d{1,3}\.\d{1,3})\speer\s10.69.0.1/)
        ip =res[1];
        console.log(ip);
        resolve(ip);
    });
    }
    )}
module.exports={
    'GET /ip':async(ctx,next)=>{
        ctx.response.type='application/json';
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:80');
        let ip = await getip();
        console.log(ip);
        ctx.response.body={ip};
    },
    'POST /signin':fn_siginin
}