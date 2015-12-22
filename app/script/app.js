
(function () {
    angular.module("MyApp", []);
    var app = angular.module("MyApp");
    app.controller("MyController", ['$http','$q', function ($http,$q) {
        var vm = this;
        vm.name = "Mahesh";
        var requestObj = {
            type: 'GET',
            url: '/api/2/details',
            header: {
                'content-type': 'application/json'
            }
        };
        vm.click = function () {
            $http(requestObj).then(function (res) {
                vm.data = JSON.stringify(res.data);
                console.log(res);
            });
        }
    }]);
}());