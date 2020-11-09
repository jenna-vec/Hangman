/* # Hangman Part One Instructions
- When the page first loads
- set a random word to all underscores and display it on the dom
- set the number of guesses to 5 and display it on the dom
- set the user's guesses to an empty array and display it on the dom
- If you guess a letter in the random word, it will replace the underscore(s) with that letter
- if the letter that you guessed is not in the random word, then Guesses left goes down 1
- If guesses left is less than 1, then you lose and you reset the game with a new random word to all underscores
- If you have filled all of the underscores, then you have won and you reset the game with a new random word to all underscores
- You can only guess one letter
- You can not guess a letter that has already been guessed */


var player = {
    guess: undefined,
    guessedLetters: [],
    correctLetters: 0
  }
  

  var game = {
    randomWord: undefined,
    numChances: 8
  }
  
  var words = [
    "later",
    "weird",
    "learn",
    "great",
    "storm",
    "worms",
    "frost",
    "while",
    "elope",
    "north"
  ]

var arraySelection = Math.floor(Math.random() * words.length)
game.randomWord = words[arraySelection];
console.log(game.randomWord);

$("#submit").click(function(){

 player.guess = ($("#letter-input").val().toLowerCase());
 
    if(game.numChances > 1)
    {
        if(player.guess.length < 2 && typeof player.guess === "string")
        {
          if(player.guessedLetters.indexOf(player.guess) > -1){
            alert("You have already guessed this letter.")
          }
          else {
            player.guessedLetters.push(player.guess);
            $('#your-guess').text(player.guess);
            var htmlString = player.guessedLetters.join(", ")
            $('#past-guesses').html(htmlString);

            game.randomWord= words[arraySelection];
            if(game.randomWord.indexOf(player.guess) > -1)
            {
              $('#your-guess').append(' is in the word!');
              $('#turns').text(game.numChances);

              for(var i = 0; i < game.randomWord.length; i++){
                if(player.guess == game.randomWord[0]){
                  $('.letter-1').text(player.guess);
                }
                if(player.guess == game.randomWord[1]){
                  $('.letter-2').text(player.guess);
                }
                if(player.guess == game.randomWord[2]){
                  $('.letter-3').text(player.guess);
                }
                if(player.guess == game.randomWord[3]){
                  $('.letter-4').text(player.guess);
                }
                if(player.guess == game.randomWord[4]){
                  $('.letter-5').text(player.guess);
                }
              }
              player.correctLetters++
              if(player.correctLetters == 5){
                $('#modal').css("display", "block");
                $('#alert').text("You have won! The word is '" + game.randomWord + "'.");
                
                var exit = document.getElementById("exit-button");
                exit.onclick = function() { 
                  $('#exit-button').css("display", "none");
                  location.reload();
                }
              }
            }
            else
            {
              $('#your-guess').append(' is not in the word');
              game.numChances--
              $('#turns').text(game.numChances);
            }
          }
        }
        else 
        {
            alert("You must enter a single letter");
        }
    }
    else 
    {
        $('#modal').css("display", "block");
        $('#alert').text("Too many attempts, you lose! The word was  '" + game.randomWord + "'.");
        var exit = document.getElementById("exit-button");
        exit.onclick = function() { 
          $('#exit-button').css("display", "none");
          location.reload();
        }
    }  
});


