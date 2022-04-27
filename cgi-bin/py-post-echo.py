#!/usr/bin/python3
import requests

response = requests.post('https://cse135ravisteven.site/cgi-bin/py-post-echo.py')

print ("Content-type:text/html\r\n\r\n")
print ('<html>')
print ('<body>')
print ('<h1>')
print ( 'POST ECHO PYTHON')
print ('<p>')
print (response.request.body)
print ('<p>')
print ('</h1>')

print ('</body>')
print ('</html>')