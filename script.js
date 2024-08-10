const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("uil-multiply");
  navBar.classList.toggle("active");
}
