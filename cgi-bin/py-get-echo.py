#!/usr/bin/python3

from urllib.parse import urlparse
from urllib.parse import parse_qs

import os


print ("Content-type:text/html\r\n\r\n")

#urlparse('//www.cwi.nl:80/%7Eguido/Python.html')
#path_info = request.META.get('PATH_INFO')
URLQUERY = os.environ['QUERY_STRING']
URL = 'https://cse135ravisteven.site/'+ os.environ['REQUEST_URI']
URLagain = urlparse(URL)

print('<p>')
print("RAW QUERY STRING:", URLQUERY)
print('</p>')

print('<p>')
print("QUERY:", URLagain)
print(parse_qs(URLagain.query))
print('</p>')

print

#for param in os.environ.keys():
  #  print('<p>')
   # print(param,os.environ[param])
    #print('</p>')
#test