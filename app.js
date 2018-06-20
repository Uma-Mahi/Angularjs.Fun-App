var app=angular.module("Fun App",[]);
app.controller("GameController",['$scope',function($scope){
var words=["rat","cat","mat","bat","eagle","guess"];
$scope.incorrect=[];
$scope.correct=[];
$scope.guesses = 6;
$scope.displayWord = '';
$scope.input = 
{
	letter : ''
}

var selectRandomWord = function()
{
	var index = Math.round(Math.random()*words.length);
	return words[index];
}

var newGame = function()
{
	$scope.incorrect = [];
	$scope.correct=[];
	$scope.guesses = 6;
	$scope.displayWord = '';

	selectedWord = selectRandomWord();
	var tempDisplayWord = '';

	for (var i = 0; i < selectedWord.length; i++)
	{
		tempDisplayWord += '*';
	}
	$scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = function()
{
	for (var i = 0; i < $scope.correct.length; i++)
	{
		if($scope.correct[i].toLowerCase()==$scope.input.letter.toLowerCase())
		{
			$scope.input.letter="";
			return;
		}
	}

	for (var i = 0; i < $scope.incorrect.length; i++) {
		if($scope.incorrect[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.input.letter="";
			return;
		}
	}
	var cor = false;
	for (var i = 0; i < selectedWord.length; i++) {
		if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);

			cor = true;
		}
	}
	if(cor)
	{
		$scope.correct.push($scope.input.letter.toLowerCase());
	}else{
		$scope.guesses--;
		$scope.incorrect.push($scope.input.letter.toLowerCase());
	}
	$scope.input.letter="";
	if($scope.guesses == 0)
	{
		alert("you lost..!");
		newGame();
	}

	if($scope.displayWord.indexOf("*")==-1)
	{
		alert("You won...!");
		newGame();
	}

}
newGame();
}]);