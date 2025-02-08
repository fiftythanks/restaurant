import bannerBgSrc from "./img/home/banner-bg.jpeg";
import cateringSrc from "./img/home/catering.jpeg";
import centerSrc from "./img/home/center.jpg";
import heroSrc from "./img/home/hero.jpeg";
import leftSrc from "./img/home/left.jpg";
import mealPlanningSrc from "./img/home/meal-planning.jpeg";
import rightSrc from "./img/home/right.jpeg";
export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const footer = document.querySelector("footer");

export function renderHome() {
  // Hero
  const heroSection = document.createElement("div");
  heroSection.classList.add("hero-section");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const heroTextHeading = document.createElement("h1");
  heroTextHeading.innerHTML = "A curated&nbsp;food experience&nbsp;with sustainably&nbsp;sourced produce.";
  heroText.appendChild(heroTextHeading);

  const heroTextParagraph = document.createElement("p");
  heroTextParagraph.textContent = "Introducing our new catering menu.";
  heroText.appendChild(heroTextParagraph);

  const heroTextButton = document.createElement("button");
  heroTextButton.setAttribute("type", "button");
  heroTextButton.textContent = "BOOK NOW";
  heroText.appendChild(heroTextButton);

  heroSection.appendChild(heroText);

  const heroImage = document.createElement("div");
  heroImage.classList.add("hero-image");

  const heroImageImg = document.createElement("img");
  heroImageImg.setAttribute("src", heroSrc);
  heroImageImg.setAttribute("alt", "Introducing our new catering menu.");
  heroImageImg.setAttribute("width", "767px");
  heroImageImg.setAttribute("height", "614px");
  heroImage.appendChild(heroImageImg);

  heroSection.appendChild(heroImage);
  main.appendChild(heroSection);

  // "Catering for all"
  const cateringForAll = document.createElement("div");
  cateringForAll.classList.add("catering-for-all");

  const cateringForAllHeading = document.createElement("h2");
  cateringForAllHeading.textContent = "Catering for all";
  cateringForAll.appendChild(cateringForAllHeading);

  const cateringTypes = document.createElement("div");
  cateringTypes.classList.add("catering-types");

  const catering = document.createElement("div");
  catering.classList.add("catering");

  const cateringImage = document.createElement("img");
  cateringImage.setAttribute("src", cateringSrc);
  cateringImage.setAttribute("alt", "Catering");
  cateringImage.setAttribute("width", "566px");
  cateringImage.setAttribute("height", "282px");
  catering.appendChild(cateringImage);

  const cateringHeading = document.createElement("h4");
  cateringHeading.textContent = "Catering";
  catering.appendChild(cateringHeading);

  const cateringText = document.createElement("p");
  cateringText.textContent = "Are you looking for someone to provide the food at your next event? Large or small, we do it all! Get in touch to start planning the perfect meal for a business lunch, wedding, cocktail reception, and more!";
  catering.appendChild(cateringText);

  cateringTypes.appendChild(catering);

  const mealPlanning = document.createElement("div");
  mealPlanning.classList.add("meal-planning");

  const mealPlanningImage = document.createElement("img");
  mealPlanningImage.setAttribute("src", mealPlanningSrc);
  mealPlanningImage.setAttribute("alt", "Meal Planning");
  mealPlanningImage.setAttribute("width", "566px");
  mealPlanningImage.setAttribute("height", "282px");
  mealPlanning.appendChild(mealPlanningImage);

  const mealPlanningHeading = document.createElement("h4");
  mealPlanningHeading.textContent = "Meal Planning";
  mealPlanning.appendChild(mealPlanningHeading);

  const mealPlanningText = document.createElement("p");
  mealPlanningText.textContent = "In today's culture of unhealthy fast food, eating well can be difficult. Don't know where to start? Let us help with our tailored menu program. Get in touch so we can work together to plan something that's right for you.";
  mealPlanning.appendChild(mealPlanningText);

  cateringTypes.appendChild(mealPlanning);
  cateringForAll.appendChild(cateringTypes);
  main.appendChild(cateringForAll);

  // Banner
  const banner = document.createElement("div");
  banner.classList.add("banner");

  const bannerHeading = document.createElement("h2");
  bannerHeading.innerHTML = "We offer delicious, natural options for all types&nbsp;of events & parties. All of our food is prepared";
  banner.appendChild(bannerHeading);

  const bannerButton = document.createElement("button");
  bannerButton.setAttribute("type", "button");
  bannerButton.innerHTML = "VIEW&nbsp;MENU";
  banner.appendChild(bannerButton);

  main.appendChild(banner);

  // Featured menu
  const featured = document.createElement("section");
  featured.classList.add("featured");

  const featuredHeading = document.createElement("h2");
  featuredHeading.textContent = "Featured Catering Menu";
  featured.appendChild(featuredHeading);

  const featuredSectionAppetizer = document.createElement("div");
  featuredSectionAppetizer.classList.add("featured-section");

  const featuredSectionTitleAppetizer = document.createElement("div");
  featuredSectionTitleAppetizer.classList.add("featured-section-title");

  const featuredSectionTitleAppetizerHeading = document.createElement("h3");
  featuredSectionTitleAppetizerHeading.textContent = "Appetizer";
  featuredSectionTitleAppetizer.appendChild(featuredSectionTitleAppetizerHeading);

  const featuredSectionTitleAppetizerText = document.createElement("p");
  featuredSectionTitleAppetizerText.textContent = "Delicate, hand-crafted platters";
  featuredSectionTitleAppetizer.appendChild(featuredSectionTitleAppetizerText);

  featuredSectionAppetizer.appendChild(featuredSectionTitleAppetizer);

  const featuredItemAppetizer = document.createElement("div");
  featuredItemAppetizer.classList.add("featured-item");

  const featuredItemAppetizerDescription = document.createElement("div");
  featuredItemAppetizerDescription.classList.add("item-description");

  const featuredItemAppetizerDescriptionHeading = document.createElement("h4");
  featuredItemAppetizerDescriptionHeading.textContent = "Wrapped and Rolled";
  featuredItemAppetizerDescription.appendChild(featuredItemAppetizerDescriptionHeading);

  const featuredItemAppetizerDescriptionText = document.createElement("p");
  featuredItemAppetizerDescriptionText.textContent = "Vegetable Cream Cheese Roll Ups";
  featuredItemAppetizerDescription.appendChild(featuredItemAppetizerDescriptionText);

  featuredItemAppetizer.appendChild(featuredItemAppetizerDescription);

  const featuredItemAppetizerPrice = document.createElement("p");
  featuredItemAppetizerPrice.classList.add("price");
  featuredItemAppetizerPrice.innerHTML = "<p>$8 per person</p>";
  featuredItemAppetizer.appendChild(featuredItemAppetizerPrice);

  featuredSectionAppetizer.appendChild(featuredItemAppetizer);
  featured.appendChild(featuredSectionAppetizer);

  const appetizerHr = document.createElement("hr");
  featured.appendChild(appetizerHr);

  const featuredSectionEntree = document.createElement("div");
  featuredSectionEntree.classList.add("featured-section");

  const featuredSectionTitleEntree = document.createElement("div");
  featuredSectionTitleEntree.classList.add("featured-section-title");

  const featuredSectionTitleEntreeHeading = document.createElement("h3");
  featuredSectionTitleEntreeHeading.textContent = "Entree";
  featuredSectionTitleEntree.appendChild(featuredSectionTitleEntreeHeading);

  const featuredSectionTitleEntreeText = document.createElement("p");
  featuredSectionTitleEntreeText.textContent = "Delectable, mouthwatering main courses";
  featuredSectionTitleEntree.appendChild(featuredSectionTitleEntreeText);

  featuredSectionEntree.appendChild(featuredSectionTitleEntreeText);

  const featuredItemEntree = document.createElement("div");
  featuredItemEntree.classList.add("featured-item");

  const featuredItemEntreeDescription = document.createElement("div");
  featuredItemEntreeDescription.classList.add("item-description");

  const featuredItemEntreeDescriptionHeading = document.createElement("h4");
  featuredItemEntreeDescriptionHeading.textContent = "Beef Tenderloin";
  featuredItemEntreeDescription.appendChild(featuredItemEntreeDescriptionHeading);

  const featuredItemEntreeDescriptionText = document.createElement("p");
  featuredItemEntreeDescriptionText.textContent = "AAA, served with a horseradish dipping sauce with a green house salad on the side";
  featuredItemEntreeDescription.appendChild(featuredItemEntreeDescriptionText);

  featuredItemEntree.appendChild(featuredItemEntreeDescription);

  const featuredItemEntreePrice = document.createElement("div");
  featuredItemEntreePrice.classList.add("price");
  featuredItemEntreePrice.innerHTML = "<p>$23 per person</p>";
  featuredItemEntree.appendChild(featuredItemEntreePrice);

  featuredSectionEntree.appendChild(featuredItemEntree);
  featured.appendChild(featuredSectionEntree);

  const entreeHr = document.createElement("hr");
  featured.appendChild(entreeHr);

  const featuredSectionDessert = document.createElement("div");
  featuredSectionDessert.classList.add("featured-section");

  const featuredSectionTitleDessert = document.createElement("div");
  featuredSectionTitleDessert.classList.add("featured-section-title");
  featuredSectionTitleDessert.innerHTML = "<h3>Dessert</h3>";
  featuredSectionDessert.appendChild(featuredSectionTitleDessert);

  const featuredItemDessert = document.createElement("div");
  featuredItemDessert.classList.add("featured-item");

  const featuredItemDessertDescription = document.createElement("div");
  featuredItemDessertDescription.classList.add("item-description");

  const featuredItemDessertDescriptionHeading = document.createElement("h4");
  featuredItemDessertDescriptionHeading.textContent = "Assorted Platter";
  featuredItemDessertDescription.appendChild(featuredItemDessertDescriptionHeading);

  const featuredItemDessertDescriptionText = document.createElement("p");
  featuredItemDessertDescriptionText.textContent = "Brownies, cookies, yogurts, fruits";
  featuredItemDessertDescription.appendChild(featuredItemAppetizerDescriptionText);

  featuredItemDessert.appendChild(featuredItemDessertDescription);

  const featuredItemDessertPrice = document.createElement("div");
  featuredItemDessertPrice.classList.add("price");
  featuredItemDessertPrice.innerHTML = "<p>$12 per person</p>";
  featuredItemDessert.appendChild(featuredItemDessertPrice);

  featuredSectionDessert.appendChild(featuredItemDessert);
  featured.appendChild(featuredSectionDessert);

  main.appendChild(featured);

  // Bottom pictures
  const pictures = document.createElement("div");
  pictures.classList.add("pictures");

  const leftPic = document.createElement("img");
  leftPic.setAttribute("src", leftSrc);
  leftPic.setAttribute("alt", "Left Picture");
  leftPic.setAttribute("width", "511px");
  leftPic.setAttribute("height", "341px");

  const centerPic = document.createElement("img");
  centerPic.setAttribute("src", centerSrc);
  centerPic.setAttribute("alt", "Center Picture");
  centerPic.setAttribute("width", "511px");
  centerPic.setAttribute("height", "341px");

  const rightPic = document.createElement("img");
  rightPic.setAttribute("src", rightSrc);
  rightPic.setAttribute("alt", "Right Picture");
  rightPic.setAttribute("width", "511px");
  rightPic.setAttribute("height", "341px");

  pictures.appendChild(leftPic);
  pictures.appendChild(centerPic);
  pictures.appendChild(rightPic);

  main.appendChild(pictures);

  header.removeAttribute("class");
  header.classList.add("home");     
}