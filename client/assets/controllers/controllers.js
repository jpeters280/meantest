app.controller('Home', function($scope, HomeFactory){
	$scope.person =person
	HomeFactory.getQuestions(function(data){
		$scope.questions = data;
	});
});

app.controller('NewQuestion', function($scope, $location, NewQuestionFactory){
	$scope.addQuestion = function(){
		NewQuestionFactory.addQuestion($scope.new_question);
		$location.path('/');
	};
	$scope.errors = NewQuestionFactory.getErrors();
});

app.controller('Answers', function($scope, $routeParams, AnswerFactory, $location){
	AnswerFactory.getAnswers($routeParams.id, function(data){
		$scope.answers = data;
	});
	$scope.likeAnswer = function(id){
		console.log(id);
		AnswerFactory.likeAnswer(id);
		$location.path('/')
	};
});

app.controller('NewAnswer', function($scope, $routeParams, $location, NewAnswerFactory){
	NewAnswerFactory.getQuestion($routeParams.id, function(data){
		$scope.question = data;
	});
	$scope.addAnswer = function(id){
		NewAnswerFactory.addAnswer(id, $scope.new_answer);
		$location.path('/question/'+id)
	};
	$scope.errors = NewAnswerFactory.getErrors();
});