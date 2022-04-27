#!/usr/bin/python3
import requests
from requests.structures import CaseInsensitiveDict

url = "https://cse135ravisteven.site/cgi-bin/py-post-echo.py"

headers = CaseInsensitiveDict()
headers["Content-Type"] = "application/json"

data = '{"productId": 123456, "quantity": 100}'


resp = requests.post(url, headers=headers, data=data)



print ("Content-type:text/html\r\n\r\n")
print('<p>')
print(resp.status_code)
print('</p>')


