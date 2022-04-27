#!/usr/bin/python3


from urllib.parse import urlparse
from urllib.parse import parse_qs
import sys
import os

#h1
print ("Content-type:text/html\r\n\r\n")

print('<p>')
print('<b>')
print(os.environ['REQUEST_METHOD'])
print('</b>')
print('</p>')



for line in sys.stdin.readline():
    print(line)
    print("HELP")
print('</p>')




# read from it 
# then put it into html


