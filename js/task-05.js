const input = document.getElementById("name-input");
const value = document.getElementById("name-output");

input.addEventListener("input", (amazingEvent) => {
  input.value === ""
    ? (value.textContent = "Anonymous")
    : (value.textContent = amazingEvent.currentTarget.value);
});
