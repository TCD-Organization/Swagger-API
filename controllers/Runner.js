'use strict';

var utils = require('../utils/writer.js');
var Runner = require('../service/RunnerService');

module.exports.getRunnerList = function getRunnerList (req, res, next, authorization) {
  Runner.getRunnerList(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginRunner = function loginRunner (req, res, next, body) {
  Runner.loginRunner(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerRunner = function registerRunner (req, res, next, body, authorization) {
  Runner.registerRunner(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
