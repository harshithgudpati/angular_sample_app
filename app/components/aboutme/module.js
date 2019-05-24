let myapp=angular.module("Myapp",[])
let mycontroller=function($scope)
{
    $scope.message="Hello world";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student={
        Firstname :"Harshith",
        LastName:"Gudapati",
        Email:"S534886@nwmissouri.edu"
    }
    $scope.Student=Student;
}
myapp.controller("Student",JSONController);
