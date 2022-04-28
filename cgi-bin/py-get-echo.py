#!/usr/bin/python3 

from urllib.parse import urlparse
from urllib.parse import parse_qs

import os


print ("Content-type:text/html\r\n\r\n")


URLQUERY = os.environ['QUERY_STRING']
URL = 'https://cse135ravisteven.site/'+ os.environ['REQUEST_URI']
URLagain = urlparse(URL)

print('<h1>')
print("GET ECHO RAVI STEVEN")
print('<h1>')

print('<p> <b>')
print("RAW QUERY STRING:", URLQUERY)
print('</b></p>')


things = (parse_qs(URLagain.query))

print('<p>')
print('<b>')
print("FORMATED LIST")
print('</b>')
print('<p>')

print ('<ul>')
for items in things:
    print ('<li>')
    print (items,":",things[items][0])
    print ('</li>')
print ('</ul>')

# now to do the post stuff
