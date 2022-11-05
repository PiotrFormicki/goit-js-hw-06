const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitEvent); //tutaj tworzę eventlistener ze zdarzeniem submit, który przyjmuje funkcje submitEvent
const user = {};

function submitEvent(event) {
  event.preventDefault(); // to coś sprawia, że strona sie nie resetuje
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill all the gaps!");
  } else {
    user.Email = email.value;
    user.Password = password.value; //w ten sposób przekazuję podane przez użytkownika dane do zmiennej user
    event.currentTarget.reset();
    console.log(user); // to wyrzuca dane user na konsole
  }
}
