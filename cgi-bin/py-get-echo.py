#!/usr/bin/python3
from urllib.parse import urlparse

URL = request.META.get('HTTP_REFERER')

parsedURL = urlparse(URL)
print ("Content-type:text/html\r\n\r\n")
print (<p>)
print( parsedURL)
print (</p>)