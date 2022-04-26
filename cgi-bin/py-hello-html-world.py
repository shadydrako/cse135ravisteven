#!/usr/bin/python3
from datetime import datetime

time = datetime.now()
print ("Content-type:text/html\r\n\r\n")
print ('<html>')
print ('<head>')
print ('<title> Hello World - Python!! </title>')
print ('</head>')
print ('<body>')
print ('<h2>Hello World! This is my first CGI program</h2>')
print ('<p>')
print (time.strftime("%H:%M:%S"))
print ('<p>')
print ('</body>')
print ('</html>')