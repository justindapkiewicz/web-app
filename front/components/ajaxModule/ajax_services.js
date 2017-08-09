angular.module('AjaxModule', [])
.factory('ajaxUtil', ['$http', '$q',
function($http, $q) {
  'use strict';

  var ajaxModule = {},
      requestHash = {},
      DEFAULT_ERROR_MESSAGE = "We’re having trouble connecting to this data. Please try refreshing";

  function handleResponse(response, scope, callback, hashKey) {
    delete requestHash[hashKey];
    scope[callback](response.data, null, response.status);
  }

  function handleError(response, scope, callback, errorCallback, hashKey) {
    delete requestHash[hashKey];

    if (!response.status || response.status === -1) {
      // The request was cancelled
      return;
    }

    errorCallback = errorCallback || callback;

    var message = response.status === 400 ? response.data.message : DEFAULT_ERROR_MESSAGE;

    scope[errorCallback](null, message, response.status);
  }

  function makeRequest(requestType, path, data, scope, callback, errorCallback, keepAlive, isForm) {
    var deferred = $q.defer(),
        request = null,
        httpConfig = {
          method: requestType,
          url: path,
          data: data,
          timeout: deferred.promise
        },
        requestHashKey = ajaxModule.getRequestHashKey(requestType, callback, errorCallback);

    if (isForm) {
      httpConfig.headers = {'Content-Type': undefined};
    }

    // If we have stored the request and it exists, we need to resolve it
    if (requestHash[requestHashKey]) {
      requestHash[requestHashKey].resolve();
    }

    request = $http(httpConfig).then(function(response) {
      handleResponse(response, scope, callback, requestHashKey);
    }, function(response) {
      handleError(response, scope, callback, errorCallback, requestHashKey);
    });

    // If we want to keep the request alive, we don't want to store it in the requestHash
    if (!keepAlive) {
      requestHash[requestHashKey] = deferred;
    }

    return {
      deferred: deferred,
      request: request
    };
  }

  ajaxModule.get = function(path, scope, callback, errorCallback, keepAlive) {
    return makeRequest("GET", path, {}, scope, callback, errorCallback, keepAlive);
  };

  ajaxModule.post = function(path, data, scope, callback, errorCallback, keepAlive) {
    return makeRequest("POST", path, data, scope, callback, errorCallback, keepAlive);
  };

  ajaxModule.form = function(path, data, scope, callback, errorCallback, keepAlive) {
    return makeRequest("POST", path, data, scope, callback, errorCallback, keepAlive, true);
  };

  ajaxModule.put = function(path, data, scope, callback, errorCallback, keepAlive) {
    return makeRequest("PUT", path, data, scope, callback, errorCallback, keepAlive);
  };

  ajaxModule.delete = function(path, scope, callback, errorCallback, keepAlive) {
    return makeRequest("DELETE", path, {}, scope, callback, errorCallback, keepAlive);
  };

  ajaxModule.getRequestHashKey = function(method, callback, errorCallback) {
    return method+"--"+callback+"--"+errorCallback;
  };

  ajaxModule.clearRequests = function() {
    for(var hash in requestHash) {
      if (requestHash.hasOwnProperty(hash)) {
        requestHash[hash].resolve();
        delete requestHash[hash];
      }
    }
  };

  ajaxModule.getRequestHash = function() {
    return requestHash;
  };

  ajaxModule.statusCodes = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409
  };

  return ajaxModule;
}]);