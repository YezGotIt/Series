# Mini-Project-Five (Todo App)

### index.html
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
</head>
<body>
    <!-- navBar -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Todo App</span>
        </div>
    </nav>
    <!-- container -->
    <div class="container py-4">
        <!-- alert class -->
        <div id="alertMe"></div>

        <!-- input tag -->
        <h3>Create Your Goals</h3>
        <div class="form-group row mt-3 py-3">
            <div class="col-sm-12">
                <input type="text" class="form-control" id="task" placeholder="Task" data-action="add">
            </div>
            <div class="col-sm-12 col-form-label mt-2">
                <button class="btn btn-primary" onclick="addData()">Add</button>
            </div>
        </div>

        <!-- content -->
        <div class="row" id="root">
            <div class="col-md-12 mt-3">
                <div class="d-flex justify-content-between">
                    <div><h3 id="${key[0]}">${key[1]}</h3></div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onclick="edit('${key[0]}')"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-primary" onclick="remove('${key[0]}')"><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <script src="./app.js"></script>
</body>

</html>

```

### Adding external script
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
```