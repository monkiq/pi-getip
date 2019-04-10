# 简介

------

通过连接在路由器上的树莓派实时获取路由器的WAN口ip地址并用react+flask+nginx展示（适用于路由器没有公网IP的情况，通过ngork或frp可以达到同样的效果）

## 环境
> - python 3.6
> - nginx
> - node.js

## 步骤

1. 安装create-react-app react react-bootstrap 
*推荐使用淘宝源安装更快* `npm config set registry https://registry.npm.taobao.org`
2. 安装python依赖包 pip install -r requirements.txt
5. 打包安装到树莓派上
6. 运行Deploy.sh

------

## 结果

![此处输入图片的描述][1]
  [1]: https://s2.ax1x.com/2019/04/09/AIqa0f.png