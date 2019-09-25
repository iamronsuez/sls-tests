# Is Mutant API

## Requirements

    AWS account with proper permissions
    A mongoDB database connection
    
## Install
    
    npm i -g serverless
    npm install
   

## Run the app (locally)

    sls offline

## Run the tests

    npm run test

## Run the tests with coverage

    npm run cov

# REST API

The REST API to the isMutant app is described below.

## Check if a given DNA chain match a mutant DNA

### Request

`POST /mutant/`

    curl -i -H 'Accept: application/json' -d '{"dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]}' https://zw456lih4a.execute-api.us-east-1.amazonaws.com/dev/mutant


### Response

    HTTP/2 200
    content-type: application/json
    content-length: 4
    date: Wed, 25 Sep 2019 04:00:13 GMT
    "OK"


## Get Stats associated

### Request

`GET /stats/`

    curl -i -H 'Accept: application/json' https://zw456lih4a.execute-api.us-east-1.amazonaws.com/dev/stats

### Response

    HTTP/2 200
    content-type: application/json
    content-length: 69
    date: Wed, 25 Sep 2019 03:58:37 GMT
    {
      "countMutantDNA": 4,
      "countMutantHuman": 2,
      "ratio": "0.50"
    }
