# Promise - Day 19

### It represents the completion of an asynchronous operation.
<br>

![promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

<br>

- Use in javascript `new Promise` | `Promise`
    - promise object has 3 properties: 
        - `pending` : initial state, neither fulfilled nor rejected.
        - `fulfilled` : meaning that the operation was completed successfully.
        - `rejected` : meaning that the operation failed.

### Let code it
```

let a = true

// creating the promise object 
const obj = new Promise((resolve, reject) => {
    
    if(a) {
        resolve("okay")
    } else{
        reject("error")
    }
})

// console.log('obj:', obj)

// obj
// .then(a=>console.log(a))
// .catch(error => console.error(error))

// we can give multi promise
// Second promise
// const obj2 = Promise.resolve("tk")

// third promise
// const obj3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve("API call"),1000)
// })


// Promise.all([obj, obj2,obj3])
// .then((values) => {
//     console.log(values);
//   });

```


---

## Let see some simple way to make API call is....fetch API

### The Fetch API provides an interface for fetching resources (including across the network).

- Use in javascript `fetch`
    - It has generic definition of Request and Response objects

```
// GET url
let url ="https://restcountries.eu/rest/v2/all"

// console.log(fetch(url))

// We can abort the API call 
// var controller = new AbortController();
// var signal = controller.signal;
// controller.abort();

// Note that point we are not using any HTTP protocol just using fetch

// Good way
// fetch(url,{signal})
// .then(res=>console.log(res))
// .then(data => console.log(data))
// .catch(error => console.error(error))


// Bad way
// fetch(url)
// .then(res=>{
//     let dd = res.json()
//     dd.then(data=>console.log(data))
// })
// .catch(error => console.error(error))
```    
---

## Let combine promise and fetch
```
// const getData = new Promise((resolve, reject)=>{
//     // GET url
//     let url ="https://restcountries.eu/rest/v2/all"

//     // Making fetch call
//     fetch(url)
//     .then( res => resolve(res.json()))
//     .catch(error => reject(error))
// })

// // getting the data form promise
// getData
// .then(data => {console.log(data)})
// .catch(error => console.log(error))

```

