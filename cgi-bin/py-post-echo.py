#!/usr/bin/python3


from urllib.parse import urlparse
from urllib.parse import parse_qs

import os


print ("Content-type:text/html\r\n\r\n")
for name, value in os.environ.items():
    print('<p>')
    print(f'{name}={value}')
    print('<p>')