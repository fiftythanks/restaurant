import { header, main } from "./index.js";

export function renderMenu() {
  header.removeAttribute("class");
  header.classList.add("menupage");

  // Menu

  // Appetizers (Hors d'oeuvres)
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Catered Cuisine";
  menu.appendChild(menuTitle);    

  const appetizers = document.createElement("div");
  appetizers.classList.add("menu-section");

  const appetizersTitle = document.createElement("div");
  appetizersTitle.classList.add("menu-section-title");

  const appetizersTitleHeading = document.createElement("h3");
  appetizersTitleHeading.textContent = "Hors d'oeuvres";
  appetizersTitle.appendChild(appetizersTitleHeading);

  const appetizersTitleText = document.createElement("p");
  appetizersTitleText.textContent = "Delicate, hand crafted appetizer platters";
  appetizersTitle.appendChild(appetizersTitleText);

  appetizers.appendChild(appetizersTitle);

  menu.appendChild(appetizers);
  main.appendChild(menu);
}