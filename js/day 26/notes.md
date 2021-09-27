# Mini-Project-Three (Form validation in js)

### index.html
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Js-Validation</title>
  <style>
    sup {
      color: red;
    }
  </style>
</head>

<body>
  <div class="container" id="root">
    <div class="row">
      <div class="col-md-12 col-lg-5 mx-auto">
        <div class="card card-body bg-light mt-5">
          <h2>Create An Account</h2>
          <p>Please fill out this form to register with us.</p>
          <div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="firstName">First name<sup>*</sup></label>
                  <input type="text" name="firstName" id="firstName" class="form-control form-control-lg" />
                  <span class="invalid-feedback" id="firstName_error"></span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="lastName">Last name<sup>*</sup></label>
                  <input type="text" name="lastName" id="lastName" class="form-control form-control-lg" />
                  <span class="invalid-feedback" id="lastName_error"></span>
                </div>
              </div>
            </div>

            <div class="form-group mt-2">
              <label for="gender">Gender:<sup>*</sup></label>
              <select class="form-control" name="gender" id="gender" class="form-control form-control-lg">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <span class="invalid-feedback" id="gender_error"></span>
            </div>

            <div class="form-group mt-2">
              <label for="address">Address<sup>*</sup></label>
              <input type="text" name="address" id="address" class="form-control form-control-lg" />
              <span class="invalid-feedback" id="address_error"></span>
            </div>

            <div class="row mt-2">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="state">State<sup>*</sup></label>
                  <input type="text" name="state" id="state" class="form-control form-control-lg" />
                  <span class="invalid-feedback" id="state_error"></span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="country">Country<sup>*</sup></label>
                  <input type="text" name="country" id="country" class="form-control form-control-lg" />
                  <span class="invalid-feedback" id="country_error"></span>
                </div>
              </div>
            </div>

            <div class="form-group mt-2">
              <label for="pincode">Pincode<sup>*</sup></label>
              <input type="text" name="pincode" id="pincode" class="form-control form-control-lg" maxlength="6" />
              <span class="invalid-feedback" id="pincode_error"></span>
            </div>

            <div class="row mt-3">
              <div class="col">
                <input type="button" id="btn" value="Submit" class="btn btn-success btn-block" />
              </div>
              <div class="col">
                <a href="#" class="btn btn-ligth btn-block">Have an account?Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="./app.js"></script>
</body>

</html>
```


### Adding external link

```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
```
