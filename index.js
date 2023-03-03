let p1score = document.querySelector("#p1Score");
let p2score = document.querySelector("#p2Score");
const btn1 = document.querySelector("#p1btn");
const btn2 = document.querySelector("#p2btn");
const btn3 = document.querySelector("#reset");
let playTo = document.querySelector("#playto");
let counter1 = 0;
let counter2 = 0;
let winningScore = 3;
let isGameOver = false;
btn1.addEventListener("click", function () {
  if (!isGameOver) {
    counter1 = counter1 + 1;
    if (counter1 === winningScore) {
      isGameOver = true;
      p1score.classList.add("has-text-success");
      p2score.classList.add("has-text-danger");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    p1score.textContent = counter1;
  }
});

btn2.addEventListener("click", function () {
  if (!isGameOver) {
    counter2 = counter2 + 1;
    if (counter2 === winningScore) {
      isGameOver = true;
      p2score.classList.add("has-text-success");
      p1score.classList.add("has-text-danger");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    p2score.textContent = counter2;
  }
});

btn3.addEventListener("click", reset);

function reset() {
  p1score.textContent = 0;
  p2score.textContent = 0;
  counter1 = 0;
  counter2 = 0;
  p1score.classList.remove("has-text-success", "has-text-danger");
  p2score.classList.remove("has-text-success", "has-text-danger");
  isGameOver = false;
  btn1.disabled = false;
  btn2.disabled = false;
}

playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
