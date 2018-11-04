function check() {
  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let correct = 0;

  if (question1 !== "True") {
    correct++;
  }
  if (question2 !== "Peace") {
    correct++;
  }
  if (question3 !== "completely safe") {
    correct++;
  }

  let pictures = ["images/win.gif", "images/meh.gif", "images/lose.gif"];
  let messages = [
    "Great job!",
    "That's just okay",
    "You really need to do better"
  ];
  let score;

  if (correct == 0) {
    score = 2;
  }

  if (correct > 0 && correct < 3) {
    score = 1;
  }

  if (correct == 3) {
    score = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
}
