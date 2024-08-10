const menuIcon = querySelector("menu-icon");
const navBar = querySelector("navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('uil uil-multiply');
  navbar.classList.toggle('active');
}
