#!/bin/sh
echo  "***************nginx配置脚本部署中***************"
mv /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default.bak
cp react_nginx.conf /etc/nginx/sites-enabled/
echo  "***************supervisor自启脚本部署中**********"
cp auto_node.conf /etc/supervisor/conf.d/
echo  "***************启动supervisor和nginx**********"
service nginx restart
supervisorctl reload
supervisorctl  shutdown
supervisord -c /etc/supervisor/supervisord.conf
supervisorctl start all