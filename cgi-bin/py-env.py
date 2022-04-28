#!/usr/bin/python3
import os
#mmffdfdf
print ("Content-type:text/html\r\n\r\n")
for items in os.environ.items():
    print('<p>')
    print(items)
    print('<p>')