angular.module('wa.UserUtility', ['ngCookies', 'AjaxModule'])
.factory('userUtility', ['$cookies', 'ajaxUtil', function ($cookies, ajaxUtil) {
  var module = {};

  module.defineUserData = function(data) {
    var user = {};
    $cookies.put('CSIuuid', data.sessionId);
    user.id = data.username;
    user.name = data.realName;
    user.permission = data.permission;
    module.user = user;
  }

  module.logout = function() {
    ajaxUtil.post('/api/user/logout', {}, module, 'onLogout', 'onLogoutError', true);
  }

  module.onLogout = function(data) {
    module.user = null;
    $cookies.remove('CSIuuid');
  }

  module.onLogoutError = function(error, status) {}

  return module;
}]);