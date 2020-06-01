'use strict';

var utils = require('../utils/writer.js');
var Analysis = require('../service/AnalysisService');

module.exports.acceptAnalysis = function acceptAnalysis (req, res, next, authorization, docId, analysisId) {
  Analysis.acceptAnalysis(authorization, docId, analysisId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAnalysis = function createAnalysis (req, res, next, body, docId, authorization) {
  Analysis.createAnalysis(body, docId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnalysisTypes = function getAnalysisTypes (req, res, next, authorization) {
  Analysis.getAnalysisTypes(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAnalysis = function updateAnalysis (req, res, next, body, docId, analysisId, authorization) {
  Analysis.updateAnalysis(body, docId, analysisId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
