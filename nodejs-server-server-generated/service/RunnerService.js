'use strict';


/**
 * Get the list of runners
 *
 * authorization String A User or Admin token is required
 * returns RunnerListRequest
 **/
exports.getRunnerList = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "runners" : [ {
    "id" : "ObjectId()",
    "runnername" : "my-runner",
    "key" : "Encrypted()"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authenticate and get a token
 *
 * body RegisterRunnerRequest Autenticate with Runnername and Key, and get a token
 * no response value expected for this operation
 **/
exports.loginRunner = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Register a Runner
 *
 * body RegisterRunnerRequest 
 * authorization String An Admin token is required
 * no response value expected for this operation
 **/
exports.registerRunner = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

