# Document Object Model (DOM) - Day 21

### What is the DOM?
#### The data representation of the objects that comprise the structure and content of a document on the web
<br>

![alt](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)


- Getting the element by:
    - Tag name - in js `document.getElementsByTagName("tag")`
    - class name - in js `document.getElementsByClassName('class')`
    - id name - in js `document.getElementById('id')`
    - query selector | query selector all - in js `document.querySelector('any')` | `document.querySelectorAll('any')`
 
 - Adding attribute by:
    - with setAttribute()
    - without setAttribute()
    - classList / removing class

- Text to HTMl element:
    - innerText - get / set    
    - innerHTML - get / set 

- Adding style to that element:
    - use style property
    - eg: `h1.style.fontSize = "10px"` like this

### Let make index.html file
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .class{
            background-color: red;
        }

        .id{
            background-color: blue;
        }

        .tag{
            background-color: yellow;
        }

    </style>
</head>
<body>
    <h1>Document Object Model (DOM)</h1>
    <h2 class="welcome" id="one">Hello Guys one</h2>
    <h2 class="welcome" id="two">Hello Guys two</h2>
    <h2 class="welcome" id="three">Hello Guys three</h2>
    <h2 class="welcome" id="four">Hello Guys four</h2>
    <script src="./app.js"></script>
</body>
</html>
``` 
