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


dumped = open('test.txt', 'wb')
print('<p>')
for line in sys.stdin.readline():
    dumped.write(line)
    print(line)
print(</p>)



#what i need to do

# listen for a post request to be made
# once it is made
# read from it 
# then put it into html


