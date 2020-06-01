'use strict';


/**
 * Accept an Analysis
 *
 * authorization String A Runner token is required
 * docId Integer Numeric ID of document
 * analysisId Integer Numeric ID of analysis to accept
 * no response value expected for this operation
 **/
exports.acceptAnalysis = function(authorization,docId,analysisId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new Analysis
 *
 * body CreateAnalysisRequest  (optional)
 * docId Integer Numeric ID of document to get
 * authorization String A User or Admin token is required
 * returns CreatedAnalysisRequest
 **/
exports.createAnalysis = function(body,docId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "analysis_id" : "1a2b3c"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of analysis types
 *
 * authorization String A User or Admin token is required
 * returns AnalysisTypesRequest
 **/
exports.getAnalysisTypes = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "types" : [ "SEMANTIC_ANALYSIS", "OTHER..." ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an Analysis
 *
 * body UpdateAnalysisRequest  (optional)
 * docId Integer Numeric ID of document
 * analysisId Integer Numeric ID of analysis to update
 * authorization String A Runner token is required
 * no response value expected for this operation
 **/
exports.updateAnalysis = function(body,docId,analysisId,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

