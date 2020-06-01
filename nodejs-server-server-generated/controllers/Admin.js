'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.loginUser = function loginUser (req, res, next, body) {
  Admin.loginUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerAdmin = function registerAdmin (req, res, next, body, authorization) {
  Admin.registerAdmin(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
