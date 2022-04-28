#!/usr/bin/python3

#creating a python object
from datetime import datetime
import socket
import json

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))


time = datetime.now()
 
message = {
    "title": " RAVI STEVEN Hello World by in JSON form in python",
    "time": time.strftime("%H:%M:%S"),
    "ip": (s.getsockname()[0])
}


message2 = json.dumps(message)


print ("Content-type:text/html\r\n\r\n")
print (message2)