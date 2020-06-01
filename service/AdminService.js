'use strict';


/**
 * Authenticate and get a token
 *
 * body LoginUserRequest Autenticate with Username and password, and get a token
 * no response value expected for this operation
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Register an Admin User
 *
 * body RegisterAdminRequest 
 * authorization String An Admin token is required
 * no response value expected for this operation
 **/
exports.registerAdmin = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

