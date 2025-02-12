import "./styles.css";
import { renderHome } from "./initial.js";
import { renderMenu } from "./menu.js";
import { renderGallery } from "./gallery.js";
export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const footer = document.querySelector("footer");

renderHome();

function clearPage(e) {
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

function moveToGallery(e) {
  clearPage();
  renderGallery();
}


const homeBtn = header.querySelector(".home-btn");
homeBtn.addEventListener("click", moveToHome);

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", moveToMenu);      

const galleryBtn = document.querySelector(".gallery-btn");
galleryBtn.addEventListener("click", moveToGallery);