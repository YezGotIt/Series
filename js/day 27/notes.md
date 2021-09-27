# Mini-Project-Four (Display the info in Rest-country-API)

### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display</title>
</head>
<body>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Country List</span>
    </div>
  </nav>
    <div class="container mt-3 py-3">
        <div id="root" class="row">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
    <script src="./app.js"></script>
</body>
</html>
```

### Adding external link & script
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" >
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.4/axios.min.js"></script>
```


### final code app.js

```

// * API call
function getData(){
    const url = "https://restcountries.com/v3/all"
    axios.get(url)
    .then(response => displayData(response.data))
    .catch(err => console.log(err))
}

getData()

// * Display the info
function displayData(countries){
    const root = document.getElementById("root")
    root.innerHTML = " "
    countries.forEach(country=>{
        const {latlng,independent,capital,flags,area,region,name, languages} = country 
        console.log('country:', country)
        const div = document.createElement("div")
        div.setAttribute("class", "col-sm mt-2 mb-2")
        div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    ${independent ? 
                        `<div class="badge bg-success text-white position-absolute" style="top: 0.5rem; right: 0.5rem;">&nbsp;&nbsp;</div>`
                        : `<div class="badge bg-warning text-white position-absolute" style="top: 0.5rem; right: 0.5rem;">&nbsp;&nbsp;</div>`
                    }
                    <img class="card-img-top" src="${flags.pop()}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${name.common}, ${region}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${country.hasOwnProperty('capital') ? capital.pop() : "NIL"}</h6>
                      <p class="card-text"><i class="fas fa-map-marker-alt"></i>  Latitude : ${latlng[0]},Longitude : ${latlng[1]}</p>
                      <p class="card-text">Languages : ${country.hasOwnProperty('languages') ? Object.values(languages).toString() : "NONE"}</p>
                      <p class="card-text">Area : ${area}</p>
                    </div>
                  </div>
        `
root.appendChild(div)
    })

}
```
