"use strict";

var is = require("torf");

function haybale (model, obj) {

  if (!is.ok(model) || !is.ok(obj)) {
    throw new TypeError("haybale requires these arguments (model, extension)");
  }

  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop) && is.type(obj[prop], "function")) {
      Object.defineProperty.call(null, model, prop, {

        value: obj[prop],
        enumerable: true
      });
    }
  }
}

module.exports = haybale;
