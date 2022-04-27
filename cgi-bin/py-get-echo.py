#!/usr/bin/python3
from urllib.parse import urlparse
print ("Content-type:text/html\r\n\r\n")

#urlparse('//www.cwi.nl:80/%7Eguido/Python.html')
#path_info = request.META.get('PATH_INFO')
for param in os.environ.keys():
       print "<b>%20s</b>: %s<\br>" % (param, os.environ[param])

#test