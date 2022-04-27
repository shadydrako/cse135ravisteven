#!/usr/bin/python3
from urllib.parse import urlparse
print ("Content-type:text/html\r\n\r\n")

#urlparse('//www.cwi.nl:80/%7Eguido/Python.html')
#path_info = request.META.get('PATH_INFO')
for param in os.environ.keys():
       print "<b>%20s</b>: %s<\br>" % (param, os.environ[param])

#hi

#urlparse('www.cwi.nl/%7Eguido/Python.html')
#ParseResult(scheme='', netloc='', path='www.cwi.nl/%7Eguido/Python.html',
           # params='', query='', fragment='')
#urlparse('help/Python.html')
#ParseResult(scheme='', netloc='', path='help/Python.html', params='',
           # query='', fragment='')