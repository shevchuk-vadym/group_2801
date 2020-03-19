var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "хуйня",
  "пидар",
  "лох",
  "сука"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerAway = [];
for (var i = 0; i < word.length; i++) {
  answerAway[i] = "_";
}
var remainingLetters = word.length;
while (remainingLetters > 0) {
  alert(answerAway.join(" "));

  var guess = prompt("угадайте букву или нажмите отмена");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("press just one bukvu");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerAway[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerAway.join(" "));
alert("Отлично! Было загадано слово " + word);
