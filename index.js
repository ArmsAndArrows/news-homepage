const navigationIcon = document.getElementById("nav-icon");
const navigationBar = document.getElementById("nav-bar");
const closeIcon = document.getElementById("close-icon");

navigationIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navigationBar.style.display = "block";
  navigationBar.classList.remove("navigation__bar__closed");
});

closeIcon.addEventListener("click", (e) => {
  e.preventDefault();
  // navigationBar.style.display="none";
  navigationBar.classList.toggle("navigation__bar__closed");
  setTimeout(closeAll, 1000);
  function closeAll() {
    navigationBar.style.display = "none";
  }
});
