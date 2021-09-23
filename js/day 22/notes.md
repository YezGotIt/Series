# Manipulating & Event Listeners in DOM


- Syntax `document.createElement('tag name')`
    - Creating an Element / Creating elements
    - Appending child to a parent element
    - Removing a child element from a parent node

### Let see some example. (**Paste this code in index.html**)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./app.js"></script>
</body>
</html>
```

### Creating, Adding & Removing

```
// // * Selecting the parent element
// const body = document.querySelector("body")

// // * creating the element
// let h1 = document.createElement("h1");
// h1.innerText = "Hello world"

// let h2 = document.createElement("h2");
// h2.innerText = "Hello world two"

// let h3 = document.createElement("h3");
// h3.innerText = "Hello world three"

// // * adding to the parent element
// body.append(h1,h2,h3)


// for(let i = 1 ; i<= 5; i++){
//     let p = document.createElement("p")
//     p.innerText = `p element ${i}`
//     body.appendChild(p)
// }


// // * creating the button
// const button = document.createElement("button")
// button.setAttribute("id", "btn")


// // * removing the children
// body.removeChild(h3)

// // * This line of code delete all element children in body
// body.innerHTML = ""

```


# Event Listeners

- Syntax - `addEventListener('any event',function)`

    - click - when the element clicked - In js  `click` || `onclick`
    - dbclick - when the element double clicked - In js  `dblclick` || `ondblclick`
    - mouseenter - when the mouse point enter to the element - In js  `mouseenter` || `onmouseenter`
    - mouseleave - when the mouse pointer leave the element - In js  `mouseleave` || `onmouseleave`
    - mousemove - when the mouse pointer move on the element - In js  `mousemove` || `onmousemove`
    - mouseover - when the mouse pointer move on the element - In js  `mouseover` || `onmouseover`
    - mouseout -when the mouse pointer out from the element - In js  `mouseout` || `onmouseout`
    - input - when value enter to input field - In js  `value` 
    - change - when value change on input field - In js  `change` || `onchange`
    - blur - when the element is not focused - In js  `blur` || `onblur`
    - keydown - when a key is down - In js  `keydown` || `onkeydown`
    - keyup - when a key is up - In js  `keyup` || `onkeyup`
    - keypress - when we press any key - In js  `keypress` || `onkeypress`
    - onload - when the browser has finished loading a page  - In js  `load` || `onload`


# click, input, change & keypress
```
// // * creating the button
// const button = document.createElement("button")
// button.setAttribute("id", "btn")
// button.innerText = "click me.!!!"
// button.style.width = "100px"
// button.style.height = "100px"
// body.append(button)

// // * creating input tag
// const inputTag = document.createElement("input")
// inputTag.setAttribute("type", "text")
// inputTag.setAttribute("id", "input")
// inputTag.value = "some value"
// body.append(inputTag)

// // * getting the element
// let btn = document.getElementById("btn")

// // *normal way
// btn.onclick = () =>{console.log(`btn clicked ${(new Date).toUTCString()}`)}

// // * event way
//btn.addEventListener("click", () =>{console.log(`btn clicked 2 ${(new Date).toUTCString()}`)})


// // * getting the value from input
// let inputval = document.getElementById("input").value
// console.log('input:', inputval)


```    

# This example for loading
```

// let url = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"

// let image = document.createElement("img")
// image.src = url
// image.alt = "image"
// image.width = "200"
// image.height = "200"

// // like this way
// image.onload = loaded()
// // or
// document.querySelector("img").addEventListener("load", loaded)

// body.appendChild(image)

// function loaded(){
//     console.log("okay done")
// }
```



# Small test

### Create a span element on HTML document and create 100 to 100 numbers dynamically and append to the element span
 - Even numbers background is red
 - Odd numbers background is yellow

## Output like this:

![task picture](https://i.ibb.co/FqqLBHW/task.png)

## Here is the code:
```
// Answer
const body = document.querySelector("body")

const div = document.createElement("div")
div.style.width = "100%"
div.style.display = 'flex';
div.style.flexWrap = 'wrap';


for(let i = 1; i <=100; i++){
    let span = document.createElement("span")
    span.style.margin = "10px"
    span.style.padding = "10px"
    span.style.width = "100px"
    span.style.height = "100px"
    span.style.display = "flex"
    span.style.justifyContent = 'center';
    span.style.alignItems = 'center';
    span.innerText = `${i}`
    span.style.fontSize = "40px"
    if(i % 2 === 0) (span.style.backgroundColor = "red",span.style.color = "white")
    else span.style.backgroundColor = "yellow"
    div.appendChild(span)
}

body.appendChild(div)
```
