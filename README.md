# haybale

decorate an object prototype with the methods of an object


**use**
```js
var decorate = require("haybale");


// model prototype
var model = {

  name: "hello"

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


decorate(model, obj);

model.run();

model.end();

```

## api

haybale exposes a single function

### decorate(fn, obj)

**_params_**

```model```: the object prototype to be decorated

```obj```: the object with which to decorate the model
