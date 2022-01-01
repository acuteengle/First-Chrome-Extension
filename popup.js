document.addEventListener('DOMContentLoaded', () => {
  const checkPageButton = document.getElementById('sendAlert');

  checkPageButton.addEventListener('click', () => {
    alert("You clicked me!");
  }, false);
}, false);