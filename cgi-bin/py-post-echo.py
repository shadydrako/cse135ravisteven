#!/usr/bin/env python3

import os
import sys
import json

from urllib.parse import parse_qs

content_len = os.environ.get('CONTENT_LENGTH', '0')
method = os.environ.get('REQUEST_METHOD', '')
query_string = os.environ.get('QUERY_STRING', '')
x_header = os.environ.get('HTTP_X_MARVIN_STATUS', '')

body = sys.stdin.read(int(content_len))
res = json.loads(body)

print('method: ', method)
print('header[X-Marvin-Status]: ', x_header)
print('query: ', query_string)
print('json: ', res)

if not query_string:
    exit()

query = parse_qs(query_string)
#print('test: ', query['test'][0])

#> method:  POST
#> header[X-Marvin-Status]:  depressed
#> query:  test=1
#> json:  {'username': 'xyz', 'password': 42}
#> test:  1
