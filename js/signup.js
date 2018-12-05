

app.controller('signupController',['$scope','$http','$location','$localStorage',function($scope,$http,$location,$localStorage){
    $scope.signup=function(obj){
      if($scope.obj.pass===$scope.obj.repeatPass){
        console.log('my data is',obj);
        
        $http({
            url : 'http://localhost:4000/api/signup',
            method : "POST",
            dataType: "json",
            data :  obj,
            headers : {'Content-Type' : 'application/json'}
          })         
        .then(function(response){
            console.log(response.data);
            if (response.data==="user exist")
            {
              alert("you are already exsit you use your email id");
              return false;
            }
            else
            {
              $localStorage.loggedIn=true;
              location.reload();
            alert('you Ragistred successfully');
           
            $location.path('/Home');
          }
          })
          .catch(function(response){
            console.log("error in posting",response);
          })
        }
        else{
          alert("password are not match");
        }
    }

}]);

