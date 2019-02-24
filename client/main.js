let modal = document.querySelector('#myModal');
let openModalButton = document.querySelector('#openModal');
let closeModalButton = document.querySelector('.close-button');
let submitMeal = document.querySelector('.submit-meal');

function myFunction() {
    var navbar = document.getElementById("myNav");
    if (navbar.className === "nav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "nav";
    }
  }

  function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
      toggleModal();
  }
}

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);
submitMeal.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);