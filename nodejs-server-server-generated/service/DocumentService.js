'use strict';


/**
 * Create a new Document
 *
 * fileName byte[]  (optional)
 * authorization String A User or Admin token is required
 * returns CreatedDocumentRequest
 **/
exports.createDocument = function(fileName,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "document_id" : "1a2b3c"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new Document
 *
 * body CreateDocumentRequest  (optional)
 * authorization String A User or Admin token is required
 * returns CreatedDocumentRequest
 **/
exports.createDocument = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "document_id" : "1a2b3c"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

