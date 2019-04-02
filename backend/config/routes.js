"use strict";
var express 		= require('express');
var router 			= express.Router();
var director 		= require('./director');
var path            = require('path');


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.use(function error(error,req, res, next) {
  console.log('Generic error', error);
  next();
});

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..',  'frontend', 'dist', 'ateknea', 'index.html' ));
});


router.get("/styles.*", (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..',  'frontend', 'dist', 'ateknea', req.path));
});
router.get("/runtime.*", (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..',  'frontend', 'dist', 'ateknea', req.path));
});
router.get("/polyfills.*", (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..',  'frontend', 'dist', 'ateknea', req.path));
});
router.get("/main.*", (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..',  'frontend', 'dist', 'ateknea', req.path));
});




router.get("/users-api/getUsers"          , director('users/userGetController', 'getAll'));
router.get("/users-api/getUser/:id"       , director('users/userGetController', 'getUser'));
router.delete("/users-api/deleteUser/:id" , director('users/userDeleteController', 'delete'));
router.post("/users-api/create"           , director('users/userCreateController', 'create'));


//router.post("/api-annotation/annotation"									, oAuth.requestMiddelware, director('annotation/annotationCrudController', 'create'));
//router.put("/api-annotation/annotation"										, oAuth.requestMiddelware, director('annotation/annotationCrudController', 'update'));
//router.delete("/api-annotation/annotation/:id"								, oAuth.requestMiddelware, director('annotation/annotationCrudController', 'delete'));

module.exports = router;