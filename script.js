const correctAns = ["B", "C", "C", "A", "A"];
const form = document.querySelector("form");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result span");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAns = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  let score = 0;
  userAns.forEach((ans, index) => {
    if (ans === correctAns[index]) {
      score += 20;
    }
  });
  console.log(score);
  //Scroll to top of page to show score
  scrollTo(0, 0);
  //show result on page

  result.classList.remove("d-none");
  //animate the score using setInterval
  let output = 0;
  const timer = setInterval(() => {
    resultText.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output += 5;
    }
  }, 50);
});
