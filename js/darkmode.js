const toggleModeButton = document.getElementById("toggle-mode-button");

toggleModeButton.addEventListener("click", () => {
  document.getElementsByTagName("html")[0].classList.toggle("dark");

  if (document.getElementsByTagName("html")[0].classList.contains("dark")) {
    toggleModeButton.classList.remove("fa-sun");
    toggleModeButton.classList.add("fa-moon");
  } else {
    toggleModeButton.classList.remove("fa-moon");
    toggleModeButton.classList.add("fa-sun");
  }
});
