
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
