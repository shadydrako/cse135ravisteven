#!/usr/bin/python3
import os
print ("Content-type:text/html\r\n\r\n")
for name, value in os.environ.items():
    print('<p>')
    print(f'{name}={value}')
    print('<p>')