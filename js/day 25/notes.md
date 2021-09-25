# Mini-Project-Two (upload file in IPFS)

### what is IPFS?
### InterPlanetary File System (IPFS) Powers the Distributed Web.
- IPFS is a protocol and peer-to-peer network for storing and sharing data in a distributed file system.

### https://ipfs.io/ 

## JS-IPFS
![](https://camo.githubusercontent.com/e92540c54c9b47f684b0e4dd5442ebe20ddbbe2e9699c29ce8400c055fa46e6a/68747470733a2f2f697066732e696f2f697066732f516d65364b4a644b637038355459624c78754c56376f517a4d694c72656d4437484d6f584c5a456d676f36526e682f6a732d697066732d737469636b65722e706e67)

### Gateway list
```
https://ipfs.github.io/public-gateway-checker/
```

### localhost 
```
// working host address
infura-ipfs.io
ipfs.infura.io // best and fast
```

### index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container mt-5 py-5">
      <h1>Upload your file to Distributed Web...</h1>
      <div class="form-text">
        If you once upload you can' delete it
      </div>

      <div class="mt-3">
        <button class="btn btn-primary" id="select">Select</button>
        <button class="btn btn-primary" id="upload">Upload</button>
      </div>
      <div id="demo"></div>
    </div>

<script src="./app.js"></script>
  </body>
</html>

```



### you can go with any gateway after getting the hashvalue
```
https://{gateway URL}/ipfs/{hashvalue}
```