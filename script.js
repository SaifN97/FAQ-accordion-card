let questions = document.querySelectorAll(".question-container");

questions.forEach((question, idx) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      question.classList.toggle("active");
    } else {
      questions.forEach((question) => question.classList.remove("active"));
      question.classList.add("active");
    }
  });
});
