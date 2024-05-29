import "./styles/main.css";
import DropDown from "./dropdownmenu";

document.getElementById("dropdown").addEventListener("click", () => {
  DropDown.dropdownmenu();
  DropDown.changeicon();
});
