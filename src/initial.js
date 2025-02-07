const main = document.querySelector("main");

// Hero
const heroSection = document.createElement("div");
heroSection.classList.add("hero-section");

const heroText = document.createElement("div");
heroText.classList.add("hero-text");

const heroTextHeading = document.createElement("h1");
heroTextHeading.innerHTML = "A curated&nbspfood experience&nbspwith sustainably&nbspsourced produce.";
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
heroImageImg.setAttribute("src", "img/home/hero.jpeg");
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
cateringImage.setAttribute("src", "img/home/catering.jpeg");
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
mealPlanningImage.setAttribute("src", "img/home/meal-planning.jpeg");
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

// ---------------------------------------------------------------------------------------------------------------------------------------STOPPED HERE 

// Banner
const banner = document.createElement("div");
banner.classList.add("banner");

// Featured menu
const featured = document.createElement("section");
featured.classList.add("featured");

// Bottom pictures
const pictures = document.createElement("div");
pictures.classList.add("pictures");