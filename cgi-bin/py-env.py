#!/usr/bin/python3
import os
print ("Content-type:text/html\r\n\r\n")
for items in os.environ.items():
    print('<p>')
    print(items, ":", os.environ[items])
    print('<p>')