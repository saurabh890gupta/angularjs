app.controller('loginControllers' ,function($scope,$http,$location,$localStorage){
    $scope.login=function(obj){
        var formData = {
            email: $scope.obj.email,
            password: $scope.obj.password,
            
        }
        console.log('my data is',formData);
        $http({
            url : "http://localhost:4000/api/login",
            method : "POST",
            dataType: "json",
            data : formData,
            headers : {'Content-Type' : 'application/json'}
            }).then(function(response){
                console.log(response.data);
                if (response.data==="login successful")
                {
                    $localStorage.loggedIn=true;
                    location.reload();
                alert("login successful");
                $location.path('/Home');
                
            }
            else{
                 alert("password is not match");
                 return false;
            }
        }) 
        .catch(function (response) {
            console.error("error in posting");
        });
        
    }
})