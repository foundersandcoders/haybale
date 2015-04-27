# haybale

decorate an object constructor function with the methods of an object


**use**
```js
var decorate = require("haybale");

// constructor function for model
function Model () {


}

// object with methods
var obj = {
  run: function () {
    console.log("running");
  },
  end: function () {
    console.log("ending");
  }
};


decorate(Model, obj);

var model = new Model();

model.run();

model.end();

```

## api

haybale exposes a single function

### decorate(fn, obj)

**_params_**

```fn```: the constructor function to be decorated

```obj```: the object with which to decorate the fn
