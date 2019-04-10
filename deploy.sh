#/bin/sh
cp rasp.conf /etc/init/
echo -e "***************rasp自启脚本已部署***************"
cp react_nginx.conf /etc/nginx/sites-enabled/
echo -e "***************nginx配置脚本已部署***************"
mkdir ~/raspberry
cp -r ./build ~/raspberry/
cp -r ./restful ~/raspberry/
cp -r ./build ~/raspberry/
service nginx restart
env PATH= ~/raspberry/restful/venv/bin
chdir /home/raspberry/restful/
exec gunicorn -w 4 -b 127.0.0.1:5000 app:app
echo -e "***************服务已启动***************"