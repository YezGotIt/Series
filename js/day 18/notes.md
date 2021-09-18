# xmlHttpRequest - Day 18


### Difference between synchronous and asynchronous code. 
<br>

```
// synchronous example

 console.log("App started")
 console.log("App process")
 let name = prompt("Enter name")
 console.log('name:', name)
 console.log("App end")

// asynchronous example

 console.log("App started")
 console.log("App process")
 setTimeout(()=>{
 let name = prompt("Enter name")
 console.log('name:', name)
 }, 0)
 console.log("App end")

```

[links](http://latentflip.com/loupe/)


![web abi](https://i.ibb.co/jLjg7HK/Copy-of-ppt-3.png)

- call stack - like console.log(), simple tasks
- web apis - asynchronous call 
- callback queue - give to the call stack

```
console.log("app start")


setTimeout(()=>{
    console.log("bye")
},3000)

setTimeout(()=>{
    console.log("hello")
    setTimeout(()=>{
        console.log("process")
    }, 0)
},2000)

console.log("app stop")

```

<br>

### It used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.

<br>

![zxl](https://i.ibb.co/vkGcfVb/Copy-of-ppt.png)


- Use in javascript `new XMLHttpRequest()`
    - XMLHttpRequest has two modes of operation: synchronous and asynchronous
        - Method are:
            - `method` - HTTP **GET** or **POST**. 
            - `URL` - request to the URL
            - `async` - synchronous (false) and asynchronous (true)

```
// Let code here
// URL
let url = "https://restcountries.eu/rest/v2/all"

// Creating the object
let xhr = new XMLHttpRequest();
console.log('xhr:', xhr)

// We are define the API call
//xhr.open(method, url, async);
xhr.open("GET", url, true )


// While onLoad
xhr.onload = () =>{
    if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);
        // console.log(typeof xhr.responseText);
        //   to convert string into object
        // let text = JSON.parse(xhr.responseText);
        // console.log('text:', text)

        } else {
          console.error(xhr.statusText);
        }
      
}

// For error
xhr.onerror = () => {alert("error")}


// We have to send the request to server
xhr.send()

```

----

[learn about XMLHttpRequest pro and cons](https://www.tutorialspoint.com/the-pros-and-cons-of-using-ajax)
