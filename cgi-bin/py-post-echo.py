#!/usr/bin/python3


from urllib.parse import urlparse
from urllib.parse import parse_qs

import os


print ("Content-type:text/html\r\n\r\n")

print('<p>')
print('<b>')
print(os.environ['REQUEST_METHOD'])
print('</b>')
print('</p>')
print('<p>')
print('<b>')
print(os.environ['CONTENT_LENGTH'])
print("I")
print('</b>')
print('</p>')


#what i need to do

# listen for a post request to be made
# once it is made
# read from it 
# then put it into html


