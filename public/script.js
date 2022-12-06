function showResponsiveMenu() {
  var menu = document.getElementById("topnav_responsive_menu");
  var icon = document.getElementById("topnav_hamburger_icon");
  var root = document.getElementById("root");
  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
    root.style_header.overflowY = "hidden";
  } else {
    menu.className = "";
    icon.className = "";
    root.style_header.overflowY = "";
  }
}