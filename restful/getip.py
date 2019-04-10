import paramiko
import re
from email.header import Header
import smtplib
from email.mime.text import MIMEText


def sendmail(content):
    mail_host = "smtp.qq.com"  # 设置服务器
    mail_user = "1487759857@qq.com"  # 用户名
    mail_pass = "lenfrfgxugaagghc"  # 口令

    sender = '1487759857@qq.com'
    receivers = '1487759857@qq.com'  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱

    message = MIMEText(content, 'plain', 'utf-8')
    message['From'] = Header(sender, 'utf-8')
    message['To'] = Header(receivers, 'utf-8')
    subject = '路由器wan口ip'
    message['Subject'] = Header(subject, 'utf-8')
    try:
        smtpObj = smtplib.SMTP()
        smtpObj.connect(mail_host, 25)  # 25 为 SMTP 端口号
        smtpObj.login(mail_user, mail_pass)
        smtpObj.sendmail(sender, receivers, message.as_string())
        print("邮件发送成功")
    except smtplib.SMTPException:
        print("Error: 无法发送邮件")


def getip():
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(hostname='192.168.6.1', port=22, username='admin', password='admin')
    cmd = 'ip addr'
    stdin, stdout, stderr = ssh.exec_command(cmd)
    result = stdout.read()
    ip = re.search(r'(10\.69\.\d{1,3}\.\d{1,3})\speer\s10.69.0.1', result.decode()).group(1)
    return ip
    ssh.close()

