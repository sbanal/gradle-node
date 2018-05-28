
# gradle-node

A Docker image which contains gradle and node.

## Build Image
```
docker build -t gradle-node/1.0 .
```


## Run Build
```
cd test-app
docker run -v [path to]/test-app:/workspace -i gradle-node/1.0 gradle npmInstall build
```

## Run Test

Related Issues: 
* https://github.com/karma-runner/karma/issues/1206
* https://github.com/bndynet/frontend/commit/2cfbe1c4b4514ded589f441993d17d1cc93135f2

To run tests:
```
docker run -v [test app path]/test-app:/workspace -p 9876:9876 -i gradle-node/1.0 gradle test
```
