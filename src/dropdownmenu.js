export default class DropDown {
  static dropdownmenu() {
    const ul = document.getElementById("menulist");
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else if (ul.style.display === "none") {
      ul.style.display = "block";
    }
  }

  static changeicon() {
    const ul = document.getElementById("menulist");
    const dropdown = document.getElementById("dropdown");
    if (ul.style.display === "block") {
      dropdown.innerHTML = "&#x2716;";
    } else if (ul.style.display === "none") {
      dropdown.innerHTML = "&#9662;";
    }
  }
}
