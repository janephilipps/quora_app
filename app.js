angular.module('quoraApp', [])

  .controller("QuestionCtrl", ['$scope', '$rootScope', 'Question', function ($scope, $rootScope, Question) {

    $scope.questions = Question.all();

    $scope.addQuestion = function() {
      // get questionText and add to questionList
      $scope.questions.push({ question: $scope.questionText });
    };

  }])

  .factory('Question', function() {

    var questions = [{
      question: 'Why is the sky blue?'
    }, {
      question: 'Why is grass green?'
    }, {
      question: 'What is the meaning of life?'
    }];

    return {
      all: function() {
        return questions;
      }
    };

  })

