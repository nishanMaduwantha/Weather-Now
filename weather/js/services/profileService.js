(function () {
    'use strict';

    angular
        .module('app')
        .factory('profileService', profileService);

    profileService.$inject = ['$http' , 'serverSettings','$filter'];

    function profileService($http , serverSettings, $filter) {
         var webApi = serverSettings.webApi ;

        return {
            userDetails: $http.get(webApi + '/user/' + localStorage.getItem("username")).then(function (user) {
                console.log(user.data.user);
                return (user.data.user);
            })
        };

    }
})();
