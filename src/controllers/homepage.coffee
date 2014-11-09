app.controller 'HomepageCtrl', ($scope) ->
  $scope.ideas = [
    {name:"Awful idea", value:-1}
    {name:"Weak idea", value:1}
    {name:"So-so idea", value:5}
    {name:"Good idea", value:10}
    {name:"Great idea", value:15}
    {name:"Brilliant idea", value:20}
  ]
  $scope.selectedIdea = $scope.ideas[2]

  $scope.executions = [
    {name:"No execution", value:1}
    {name:"Weak execution", value:1000}
    {name:"So-so execution", value:10000}
    {name:"Good execution", value:100000}
    {name:"Great execution", value:1000000}
    {name:"Brilliant execution", value:10000000}
  ]
  $scope.selectedExecution = $scope.executions[3]
