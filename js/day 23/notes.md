# Adding external script

## we can add external script to index.html file.

### Let see some basic encryption in js
```
// * in build methods
// * convert into base64 string
let encrypted = btoa("Hello World")
let decrypted = atob(encrypted)
```

### Now, adding external script for encryption. Goto this link [https://cdnjs.com/](https://cdnjs.com/) and type crypto js in search bar.

```
// * add this piece of code here .toString() for encrypted !important
 let encrypted = CryptoJS.AES.encrypt("Hello world", "Secret Passphrase");

 // * add this piece of code here .toString(CryptoJS.enc.Utf8) for decrypted !important
 let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
```

### One more, example is moment js for [docs](https://momentjs.com/)

```
// get the current date
let currentDate = new Date()

// passing to moment.js
let RelativeTime = moment(currentDate, "YYYYMMDD").fromNow();
```