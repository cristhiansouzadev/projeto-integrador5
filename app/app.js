var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);


app.controller('planos', function($scope, $http, $uibModal, $log) {
  $scope.modalShown = false;
  $scope.animationsEnabled = true;

  $scope.cidades = [];

    $http.get("http://private-fe2a-scuptel.apiary-mock.com/ddd/details").then(function (response) {
        $scope.cidades = response.data.data;
        //console.log($scope.cidades);
    });



    $scope.resultado = function (size) {

        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            cidades: function () {
              return $scope.cidades;
            }
          }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        var origem = $scope.selected;
        document.getElementById("orig").value = origem.ddd;

        $scope.precoPlanos();

      });

    }


});



app.controller('eventosCadastrados', function($scope, $http, $log) {

  $scope.eventos = [];

    $http.get("http://private-fe2a-scuptel.apiary-mock.com/ddd/details").then(function (response) {
        $scope.eventos = response.data.data;
        console.log($scope.eventos);
    });

    $scope.abrirEvento = function( ddd ){
      alert(ddd);

        $http.get("http://private-fe2a-scuptel.apiary-mock.com/ddd/pricing").then(function (response) {
            $scope.grupos = response.data.data;
            console.log($scope.grupos);
        });
    }

});



angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, cidades) {

  $scope.cidades = cidades;
  $scope.selected = {
    cidade: $scope.cidades[0]
  };

  $scope.selecionar = function () {
    $uibModalInstance.close($scope.selected.cidade);
    //console.log($scope.selected.cidade);
  };

  $scope.fechar = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
