# 简介

------

通过连接在路由器上的树莓派实时获取路由器的WAN口ip地址并用react+koa2+nginx展示（适用于路由器没有公网IP的情况，通过ngork或frp可以达到同样的效果）

## 环境
> - python 2.7
> - nginx
> - node.js

## 步骤
1. 下载zip解压
2. `cd koa2-react/rasp`
3. `cnpm install create-react-app react react-bootstrap `
4. `cd ../koa2`
5. `cnpm install koa2 koa2-router koa-bodyparser koa2-cors ssh2-utils`
6. `apt install supervisor nginx-light python`
7. `./deploy.sh`
------

## 结果

![example1](https://s2.ax1x.com/2019/04/11/AHAxET.png)