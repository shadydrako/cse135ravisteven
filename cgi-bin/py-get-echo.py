#!/usr/bin/python3
from urllib.parse import urlparse
print ("Content-type:text/html\r\n\r\n")

urlparse('//www.cwi.nl:80/%7Eguido/Python.html')

print(ParseResult(scheme='', netloc='www.cwi.nl:80', path='/%7Eguido/Python.html',
            params='', query='', fragment=''))

#urlparse('www.cwi.nl/%7Eguido/Python.html')
#ParseResult(scheme='', netloc='', path='www.cwi.nl/%7Eguido/Python.html',
           # params='', query='', fragment='')
#urlparse('help/Python.html')
#ParseResult(scheme='', netloc='', path='help/Python.html', params='',
           # query='', fragment='')