import { header, main } from "./index.js";
import galleryOneSrc from "./img/gallery/gallery1.webp";
import galleryTwoSrc from "./img/gallery/gallery2.webp";
import galleryThreeSrc from "./img/gallery/gallery3.webp";
import galleryFourSrc from "./img/gallery/gallery4.webp";
import galleryFiveSrc from "./img/gallery/gallery5.webp";
import gallerySixSrc from "./img/gallery/gallery6.webp";
import gallerySevenSrc from "./img/gallery/gallery7.webp";
import galleryEightSrc from "./img/gallery/gallery8.webp";
import galleryNineSrc from "./img/gallery/gallery9.webp";
import galleryTenSrc from "./img/gallery/gallery10.webp";
import galleryElevenSrc from "./img/gallery/gallery11.webp";

export function renderGallery() {
  header.removeAttribute("class");
  header.classList.add("gallerypage");

  const title = document.createElement("h1");
  title.textContent = "Recently Catered Events";
  main.appendChild(title);

  const galleryWrapper = document.createElement("div");
  galleryWrapper.classList.add("gallery-wrapper");

  // Column one
  const columnOne = document.createElement("div");

  const galleryOne = document.createElement("img");
  galleryOne.src = galleryOneSrc;
  columnOne.appendChild(galleryOne);

  const galleryFour = document.createElement("img");
  galleryFour.src = galleryFourSrc;
  columnOne.appendChild(galleryFour);

  const gallerySeven = document.createElement("img");
  gallerySeven.src = gallerySevenSrc;
  columnOne.appendChild(gallerySeven);

  const galleryTen = document.createElement("img");
  galleryTen.src = galleryTenSrc;
  columnOne.appendChild(galleryTen);

  galleryWrapper.appendChild(columnOne);

  // Column two
  const columnTwo = document.createElement("div");
  
  const galleryTwo = document.createElement("img");
  galleryTwo.src = galleryTwoSrc;
  columnTwo.appendChild(galleryTwo);

  const galleryFive = document.createElement("img");
  galleryFive.src = galleryFiveSrc;
  columnTwo.appendChild(galleryFive);

  const galleryEight = document.createElement("img");
  galleryEight.src = galleryEightSrc;
  columnTwo.appendChild(galleryEight);

  const galleryEleven = document.createElement("img");
  galleryEleven.src = galleryElevenSrc;
  columnTwo.appendChild(galleryEleven);

  galleryWrapper.appendChild(columnTwo);

  // Column three
  const columnThree = document.createElement("div");

  const galleryThree = document.createElement("img");
  galleryThree.src = galleryThreeSrc;
  columnThree.appendChild(galleryThree);

  const gallerySix = document.createElement("img");
  gallerySix.src = gallerySixSrc;
  columnThree.appendChild(gallerySix);

  const galleryNine = document.createElement("img");
  galleryNine.src = galleryNineSrc;
  columnThree.appendChild(galleryNine);

  galleryWrapper.appendChild(columnThree);
  main.appendChild(galleryWrapper);
}