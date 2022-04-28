#!/usr/bin/python3

from datetime import datetime
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("137.184.225.4", 1))


time = datetime.now()
print ("Content-type:text/html\r\n\r\n")
print('<title>')
print ('RAVI STEVEN Hello World - Python!!')
print('</title>')
print('<h2>')
print ('Hello World! This is my first CGI program')
print('</h2>')
print ('<p>')
print (time.strftime("%H:%M:%S"))
print ('</p>')
print ('<p>')
print ((s.getsockname()[0]))
print ('</p>')
