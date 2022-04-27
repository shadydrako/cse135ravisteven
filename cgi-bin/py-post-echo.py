#!/usr/bin/python3


from urllib.parse import urlparse
from urllib.parse import parse_qs
import sys
import os

#h1
print ("Content-type:text/html\r\n\r\n")

print('<h1>')
print("POST ECHO PYTHON ")
print('</h1>')

print('<p>')
print('<b>')
print(os.environ['REQUEST_METHOD'])
print('</b>')
print('</p>')


print('<h1>')
print("MESSAGE BODY ")
print('</h1>')

for line in sys.stdin.readline():
    print(line)
print('</p>')




# read from it 
# then put it into html


