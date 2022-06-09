window.addEventListener('DOMContentLoaded', (e) => {
  const editQuestion = document.getElementsByClassName('btn btn-primary');
// add event listner to edit
  for (let i = 0; i < editQuestion.length; i++) {
      editQuestion[i].addEventListener('click', (e) => {
          console.log('clicked');
          const questionId = e.target.id;
          const question = document.getElementById(questionId);
          const questionText = question.innerText;
          const questionTextArea = document.getElementById('questionTextArea');
          questionTextArea.value = questionText;
      }
      );
  }
}
);
