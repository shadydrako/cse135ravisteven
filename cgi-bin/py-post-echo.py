#!/usr/bin/python3
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/', methods=['POST'])

def parse_request():
    data = request.data
    return jsonify(data)


print ("Content-type:text/html\r\n\r\n")
print ('<p>')
print (parse_request)
print ('</p>')

