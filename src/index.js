import "./styles.css";
import { header, main, footer, renderHome } from "./initial.js";
import { renderMenu } from "./menu.js";

renderHome();

function clearPage(e  ) {
  Array.from(main.childNodes).forEach((child) => child.remove());
}

function moveToHome(e) {
  clearPage();
  renderHome();
}

function moveToMenu(e) {
  clearPage();
  renderMenu();
}


const homeBtn = header.querySelector(".home-btn");
homeBtn.addEventListener("click", moveToHome);

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", moveToMenu);      