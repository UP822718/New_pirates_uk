import json
from urllib.parse import urlencode
from urllib.request import urlopen
key = ""
def Parties(code = None,start_date = None,end_date = None,company = None,limit = None):
    vars = {"key":key}
    if code is not None:
        vars.code = code
    if start_date is not None:
        vars.start_date = start_date
    if end_date is not None:
        vars.end_date = end_date
    if company is not None:
        vars.company = company
    if limit is not None:
        vars.limit = limit
    url = "https://opinionbee.uk/json/v1.0/parties?" + urlencode(vars)
    print(url)
    contents = urlopen(url).read()
    data = json.loads(contents)
    return data

def Companies(code = None,start_date = None,end_date = None,company = None,limit = None):
    vars = {"key":key}
    if code is not None:
        vars.code = code
    if start_date is not None:
        vars.start_date = start_date
    if end_date is not None:
        vars.end_date = end_date
    if company is not None:
        vars.company = company
    if limit is not None:
        vars.limit = limit
    url = "https://opinionbee.uk/json/v1.0/companies?"  + urlencode(vars)
    contents = urlopen(url).read()
    data = json.loads(contents)
    return data

def Types(code = None,start_date = None,end_date = None,company = None,limit = None):
    vars = {"key":key}
    if code is not None:
        vars.code = code
    if start_date is not None:
        vars.start_date = start_date
    if end_date is not None:
        vars.end_date = end_date
    if company is not None:
        vars.company = company
    if limit is not None:
        vars.limit = limit
    url = "https://opinionbee.uk/json/v1.0/types?"  + urlencode(vars)
    contents = urlopen(url).read()
    data = json.loads(contents)
    return data

def Polls(code = None,start_date = None,end_date = None,company = None,limit = None):
    vars = {"key":key}
    if code is not None:
        vars.code = code
    if start_date is not None:
        vars.start_date = start_date
    if end_date is not None:
        vars.end_date = end_date
    if company is not None:
        vars.company = company
    if limit is not None:
        vars.limit = limit
    url = "https://opinionbee.uk/json/v1.0/polls?"  + urlencode(vars)
    contents = urlopen(url).read()
    data = json.loads(contents)
    return data

