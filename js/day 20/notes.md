# Writing Clean code 


### In javascript [Visit this link this is awesome](https://github.com/ryanmcdermott/clean-code-javascript) 


## Let see previous example and learn about Async / Await

- Use in javascript `async` and `await`
    - Only for function (**Note** : __Keep in mind__)



```
// // * previous example for day 19
// const getData = new Promise((resolve, reject)=>{
//     // * GET url
//     let url ="https://restcountries.eu/rest/v2/all"

//     // * Making fetch call
//     fetch(url)
//     .then( res => resolve(res.json()))
//     .catch(error => reject(error))
// })

// // * getting the data form promise
// getData
// .then(data => {console.log(data)})
// .catch(error => console.log(error))

// // * Refactor it (Note : same example)


// // * Making async 
// const getData = new Promise( async (resolve, reject) => {
//     // * GET url
//     let url ="https://restcountries.eu/rest/v2/all"

//     // * Making await
//     let response = await fetch(url)
//     let data = await response.json()
//     if(data) resolve(data)
//     reject("error happens")
// })

// // * getting the data form promise
// getData
// .then(data => {console.log(data)})
// .catch(error => console.log(error))

```


## Book for javascript 

1. [Clean code](https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388)

2. [Javascript: The Good Parts](https://www.amazon.in/Javascript-Good-Parts-D-Crockford/dp/0596517742)

