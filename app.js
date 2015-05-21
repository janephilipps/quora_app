angular.module('quoraApp', [])

  .controller("QuestionCtrl", ['$scope', '$rootScope', 'Question', function ($scope, $rootScope, Question) {

    $scope.questions = Question.all();

  }])

  .factory('Question', function() {

    var questions = [{
      id: 0,
      question: 'Why is the sky blue?'
    }, {
      id: 1,
      question: 'Why is grass green?'
    }, {
      id: 2,
      question: 'What is the meaning of life?'
    }];

    return {
      all: function() {
        return questions;
      }
    };

  })

