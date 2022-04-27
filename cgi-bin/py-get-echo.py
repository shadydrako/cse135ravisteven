#!/usr/bin/python3
from urllib.parse import urlparse
import os
print ("Content-type:text/html\r\n\r\n")

#urlparse('//www.cwi.nl:80/%7Eguido/Python.html')
#path_info = request.META.get('PATH_INFO')
for param in os.environ.keys():
       print ('<p>')
       print ("hi")
       print ('</p>')

#test