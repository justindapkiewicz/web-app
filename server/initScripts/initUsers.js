var http = require('http');
var mongoose  = require('mongoose');
var express = require('express');
var passport = require('passport');
var bCrypt= require('bCrypt-nodejs');

//importing the scheemas of the object
var user = require('../user')();
var app = express();

var db;

var dbPath  = "mongodb://127.0.0.1:27017/csi";
mongoose.connect(dbPath);

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("connected successfully");
  generateUserData();
});

console.log("Starting app");
app.listen(8080);
console.log("Started on 8080...");
console.log("All scripting finished");

function generateUserData(){
  console.log("--generating user Data--");
  user.register("csiadmin", "csi4dm1n!", "administrator", function(error, data) {
    if (error) {
    	console.log(error);
    }
    else {
	    console.log("successfully generated user codes");
	}
  });
  user.register("tsmith", "tsmith", "tech", function(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      console.log("successfully generated user codes");
  }
  });
  user.register("jdapkiewicz", "jdapkiewicz", "tech", function(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      console.log("successfully generated user codes");
  }
  });
};