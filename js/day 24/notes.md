# Mini-Project-One (**giphy-API**)

## step by step get to API key from them
- step 1. go to this site

[![](https://i.ibb.co/khXS7vr/Screenshot-6.png)](https://developers.giphy.com/)

- step 2. after login or sign up, this your dashboard and click the create apps button.

![step 2](https://i.ibb.co/j4yFSxr/step-2.png)

- step 3. click API and next step button

![step 3](https://i.ibb.co/syMWk9z/step-3.png)

- step 4. type app name and description. Accept the agree and click next step

![step 4](https://i.ibb.co/TwhwQFR/step-4.png)

- step 5. now you can see the API key in dashboard 

![step 5](https://i.ibb.co/k288R94/step-5.png)


# Now code part

## Index.html file 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    div{
        display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    border: 1px dashed black;
    }
</style>
<body>
    <input type="text" id="name" onkeyup="callGipyApiChange(this)"/>
    <div></div>
    <script src="./app.js"></script>
</body>
</html>
```


## app.js file 
### Now we are going see the axios library. goto https://cdnjs.com
```
function callGipyApiChange(element){
console.log("okay")
}
```


## Final code in app.js
```
function callGipyApiChange(element){
    // * get the input value
    let text =  element.value
    // * checking the input equal to one
    if(text.length >= 1){
        // * API key
        let key = "Your_API_key"

        // * API End Point
        let APIEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=15&offset=0&rating=g&lang=en`

        // * HTTP Protocol
        axios.get(APIEndPoint)
        .then(response => displayGif(response.data.data))
        .catch(error => console.error(error))
    }
}

// * showing the output
function displayGif(response) {
    // * selecting the div element
    const div = document.querySelector("div")
    div.innerHTML = ""
    response.forEach(element =>{
        console.log('element:', element.images.preview_webp)
        let image = document.createElement('img')
        image.src = element.images.preview_webp.url
        // * basic of styling
        image.style.margin = "5px"
        image.style.padding = "5px"
        image.style.width = element.images.preview_webp.width
        image.style.height = element.images.preview_webp.height
        div.appendChild(image)
    })
}
```