'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

module.exports.createDocument = function createDocument (req, res, next, fileName, authorization) {
  Document.createDocument(fileName, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createDocument = function createDocument (req, res, next, body, authorization) {
  Document.createDocument(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
