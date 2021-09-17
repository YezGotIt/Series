# Web Storage - Day 17

### It provides mechanisms by which browsers can store key/value pairs


* `Cookies` - Cookies are data, stored in small text files, on your computer.

   - Cookies Max Storage - 4096 bytes
   - In javascript we should use `document.cookie` 
   - Cookie methods:
     - max-age | expires  - In second only ( eg : 60 * 60* 30) | date-in-GMTString-format (eg: Thu, 18 Dec 2013 12:00:00 UTC) (js in build method is : { (new Date).toUTCString() }
     - secure - only be transmitted over secure protocol as https.
     - SameSite - lax**, strict, none
     - path - defaults to the current path 
   ```
   // To set a cookie
   document.cookie = "name=cookie storage; SameSite=none; Secure; max-age=60*60*1000; path=/;"


   // To get the value from the cookie
   let cookie = document.cookie
   console.log('cookie:', cookie)

   // To clear the cookie
    document.cookie = "name=cookie storage; SameSite=none; Secure; max-age=0; path=/;"
   console.log('cookie:', document.cookie)
   ```


* `sessionStorage` - Available for the duration of the page session. Data is never transferred to the server (as long as the browser is open, including page reloads and restores).
  
    - Session Max Storage - 5Mb
    - In javascript we should use `window.sessionStorage` | `sessionStorage`.
        - SessionStorage methods:
            * sessionStorage.setItem('key', 'value') 
            * sessionStorage.getItem('key') 
            * sessionStorage.removeItem('key') 
            * sessionStorage.clear() 
```
// To declare the session

let sdata = window.sessionStorage
sdata.setItem('name', 'session storage')

// To get the Data

console.log(sdata.getItem('name'))

// To remove the Data

console.log(sdata.removeItem('name'))
console.log(sdata)

// To clear the Data

console.log(sdata.clear())
console.log(sdata)

```


* `localStorage` - same has sessionStorage but persists even when the browser is closed and reopened.

    - Local Max Storage - 10MB
    - In javascript we should use `window.localStorage` | `localStorage`.
        - localStorage method:
            * localStorage.setItem('key', 'value') 
            * localStorage.getItem('key') 
            * localStorage.removeItem('key') 
            * localStorage.clear() 
```
// To declare the local

let ldata = window.localStorage
ldata.setItem('name', 'local storage')

// To get the Data

console.log(ldata.getItem('name'))

// To remove the Data

console.log(ldata.removeItem('name'))
console.log(ldata)

// To clear the Data

console.log(ldata.clear())
console.log(ldata)

```


# Links:
[For cookie](https://www.w3schools.com/js/js_cookies.asp)

[For cookie 2](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

[For sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

[For localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

