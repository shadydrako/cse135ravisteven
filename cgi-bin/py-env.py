#!/usr/bin/python3
import os
#mmffdfdfss
print ("Content-type:text/html\r\n\r\n")
for items in os.environ.items():
    print('<p>')
    print(items[0],": ", items[1])
    print('<p>')