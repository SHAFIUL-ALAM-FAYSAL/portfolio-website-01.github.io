// $(document).ready(function () {
//   $("#menu").meanmenu({
//     meanMenuContainer: "#mobile_menu",
//     meanScreenWidth: 4000,
//   });
// });

function toggleMenu() {
  const menu = document.getElementById("dropdown-links");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}
