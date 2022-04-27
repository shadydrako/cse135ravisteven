#!/usr/bin/python3


from urllib.parse import urlparse
from urllib.parse import parse_qs

import os


print ("Content-type:text/html\r\n\r\n")
for name, value in os.environ.items():
    print('<p>')
    print(f'{name}={value}')
    print('<p>')


#what i need to do

# listen for a post request to be made
# once it is made
# read from it 
# then put it into html

from flask import Flask, request
app = Flask(__name__)
@app.route('/',methods=['POST'])

def result():
    print('<p>')
    print(request.json)
    print('</p>')
    return 'Recieved'

