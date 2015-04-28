"use strict";

var test = require("tape");
var decorate = require("..");

test("haybale should throw an error if no arguments are passed", function (t) {


  try {
    decorate(undefined, undefined);
    t.fail("this shouldn't be executed");
  } catch (e) {
    t.ok(e, "error thrown");
  }

  t.end();

});

test("haybale should throw an error if function and objects aren't passed", function (t) {


  try {
    decorate(undefined, { name: "hello" });
    t.fail("this shouldn't be executed");
  } catch (e) {
    t.ok(e, "error thrown without fn");
  }

  try {
    decorate(function () { return {}; }, undefined);
    t.fail("this shouldn't be executed");
  } catch (e) {
    t.ok(e, "error thrown without object");
  }

  t.end();

});


test("haybale should return give obj properties to fn.prototype", function (t) {

  function constr (spec) {

    var that = spec ? Object.create(spec) : {};

    that.hello = "cool";

    return that;
  }

  var inst = constr();

  var obj = {
    m: function () {
      return 7;
    },
    p: "cool"
  };

  decorate(inst, obj);

  t.ok(inst.hasOwnProperty("hello"), "original properties still exist");
  t.ok(inst.hasOwnProperty("m"), "fn decorated with obj method");
  t.notOk(inst.hasOwnProperty("p"), "fn not decorated with obj property");
  t.end();

});
