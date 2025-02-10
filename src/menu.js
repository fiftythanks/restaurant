import { header, main } from "./index.js";
import starSrc from "./img/menu/star.svg";

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

  // Wrapped and Rolled
  const wrappedRolled = document.createElement("div");
  wrappedRolled.classList.add("menu-item");

  const wrappedRolledDescription = document.createElement("div");
  wrappedRolledDescription.classList.add("item-description");

  const wrappedRolledTitle = document.createElement("h4");
  wrappedRolledTitle.textContent = "Wrapped and Rolled";
  wrappedRolledDescription.appendChild(wrappedRolledTitle);

  const wrappedRolledText = document.createElement("p");
  wrappedRolledText.textContent = "Vegetable Cream Cheese Roll Ups";
  wrappedRolledDescription.appendChild(wrappedRolledText);

  wrappedRolled.appendChild(wrappedRolledDescription);

  const wrappedRolledPrice = document.createElement("p");
  wrappedRolledPrice.classList.add("price");
  wrappedRolledPrice.textContent = "$8 per person";
  wrappedRolled.appendChild(wrappedRolledPrice);    

  appetizers.appendChild(wrappedRolled);

  // Pastry
  const pastry = document.createElement("div");
  pastry.classList.add("menu-item");

  const pastryDescription = document.createElement("div");
  pastryDescription.classList.add("item-description");
  
  const pastryTitle = document.createElement("h4");
  pastryTitle.textContent = "Pastry";
  pastryDescription.appendChild(pastryTitle);

  const pastryText = document.createElement("p");
  pastryText.textContent = "Prosciutto Spinach Pinwheels";
  pastryDescription.appendChild(pastryText);

  pastry.appendChild(pastryDescription);

  const pastryPrice = document.createElement("p");
  pastryPrice.classList.add("price");
  pastryPrice.textContent = "$6 per person";
  pastry.appendChild(pastryPrice);

  appetizers.appendChild(pastry);

  // Picked and Skewered
  const pickedSkewered = document.createElement("div");
  pickedSkewered.classList.add("menu-item");

  const pickedSkeweredDescription = document.createElement("div");
  pickedSkeweredDescription.classList.add("item-description");

  const pickedSkeweredTitle = document.createElement("h4");
  pickedSkeweredTitle.textContent = "Picked and Skewered";
  pickedSkeweredDescription.appendChild(pickedSkeweredTitle);

  const pickedSkeweredText = document.createElement("p");
  pickedSkeweredText.textContent = "Hummus Cucumber Rolls";
  pickedSkeweredDescription.appendChild(pickedSkeweredText);

  pickedSkewered.appendChild(pickedSkeweredDescription);

  const pickedSkeweredPrice = document.createElement("p");
  pickedSkeweredPrice.classList.add("price");
  pickedSkeweredPrice.textContent = "$7 per person";

  pickedSkewered.appendChild(pickedSkeweredPrice);

  appetizers.appendChild(pickedSkewered);

  // Stuffed
  const stuffed = document.createElement("div");
  stuffed.classList.add("menu-item");

  const stuffedDescription = document.createElement("div");
  stuffedDescription.classList.add("item-description");

  const stuffedTitle = document.createElement("h4");
  stuffedTitle.textContent = "Stuffed";
  stuffedDescription.appendChild(stuffedTitle);

  const stuffedText = document.createElement("p");
  stuffedText.textContent = "Jalapeños and Ricotta";
  stuffedDescription.appendChild(stuffedText);

  stuffed.appendChild(stuffedDescription);

  const stuffedPrice = document.createElement("p");
  stuffedPrice.classList.add("price");
  stuffedPrice.textContent = "$4 per person";
  stuffed.appendChild(stuffedPrice);

  appetizers.appendChild(stuffed);
  menu.appendChild(appetizers);

  const appetizersHr = document.createElement("hr");
  menu.appendChild(appetizersHr);

  // Entrees
  const entrees = document.createElement("div");
  entrees.classList.add("menu-section");

  const entreesTitle = document.createElement("div");
  entreesTitle.classList.add("menu-section-title");

  const entreesTitleHeading = document.createElement("h3");
  entreesTitleHeading.textContent = "Entrees";
  entreesTitle.appendChild(entreesTitleHeading);

  const entreesTitleText = document.createElement("p");
  entreesTitleText.textContent = "Delectable, mouthwatering main courses";
  entreesTitle.appendChild(entreesTitleText);

  entrees.appendChild(entreesTitle);

  // Poached Salmon
  const salmon = document.createElement("div");
  salmon.classList.add("menu-item");
  
  const salmonDescription = document.createElement("div");
  salmonDescription.classList.add("item-description");
  
  const salmonTitle = document.createElement("h4");
  salmonTitle.textContent = "Poached Salmon";
  salmonDescription.appendChild(salmonTitle);

  const salmonText = document.createElement("p");
  salmonText.textContent = "Alaskan salmon, drizzled with cucumber dill sauce and served with wild rice on the side";
  salmonDescription.appendChild(salmonText);

  salmon.appendChild(salmonDescription);

  const salmonPrice = document.createElement("p");
  salmonPrice.classList.add("price");
  salmonPrice.textContent = "$25 per person";
  salmon.appendChild(salmonPrice);

  entrees.appendChild(salmon);

  // Beef Tenderloin
  const beef = document.createElement("div");
  beef.classList.add("menu-item");
  
  const beefDescription = document.createElement("div");
  beefDescription.classList.add("item-description");

  const beefTitle = document.createElement("h4");
  beefTitle.textContent = "Beef Tenderloin";
  beefDescription.appendChild(beefTitle);

  const beefText = document.createElement("p");
  beefText.textContent = "AAA, served with a horseradish dipping sauce with a green house salad on the side";
  beefDescription.appendChild(beefText);

  beef.appendChild(beefDescription);

  const beefPrice = document.createElement("p");
  beefPrice.classList.add("price");
  beefPrice.textContent = "$23 per person";
  beef.appendChild(beefPrice);

  entrees.appendChild(beef);

  // Pasta Primavera
  const pasta = document.createElement("div");
  pasta.classList.add("menu-item");

  const pastaDescription = document.createElement("div");
  pastaDescription.classList.add("item-description");
  
  const pastaTitle = document.createElement("h4");
  pastaTitle.textContent = "Pasta Primavera";
  pastaDescription.appendChild(pastaTitle);

  const pastaText = document.createElement("p");
  pastaText.textContent = "Vegetarian gluten free penne with red onion, carrot, broccoli, bell pepper, yellow squash, zucchini, tomatoes and garlic";
  pastaDescription.appendChild(pastaText);

  pasta.appendChild(pastaDescription);

  const pastaPrice = document.createElement("p");
  pastaPrice.classList.add("price");
  pastaPrice.innerHTML = "$18 per person";
  pasta.appendChild(pastaPrice);

  entrees.appendChild(pasta);

  // Braised Duck Breast
  const duck = document.createElement("div");
  duck.classList.add("menu-item");

  const duckDescription = document.createElement("div");
  duckDescription.classList.add("item-description");

  const duckTitle = document.createElement("h4");
  duckTitle.textContent = "Braised Duck Breast";
  duckDescription.appendChild(duckTitle);

  const duckText = document.createElement("p");
  duckText.textContent = "Pork based curry sauce with roasted root vegetables";
  duckDescription.appendChild(duckText);

  duck.appendChild(duckDescription);

  const duckPrice = document.createElement("p");
  duckPrice.classList.add("price");
  duckPrice.textContent = "$20 per person";
  duck.appendChild(duckPrice);

  entrees.appendChild(duck);

  menu.appendChild(entrees);

  const duckHr = document.createElement("hr");
  menu.appendChild(duckHr);

  // Desserts
  const desserts = document.createElement("div");
  desserts.classList.add("menu-section");

  const dessertsTitle = document.createElement("div");
  dessertsTitle.classList.add("menu-section-title");
  
  const dessertsTitleHeading = document.createElement("h3");
  dessertsTitleHeading.textContent = "Desserts";
  dessertsTitle.appendChild(dessertsTitleHeading);

  const dessertsTitleText = document.createElement("p");
  dessertsTitleText.textContent = "Syrupy and candied sweets";
  dessertsTitle.appendChild(dessertsTitleText);

  desserts.appendChild(dessertsTitle);

  // Cookie Platter
  const cookie = document.createElement("div");
  cookie.classList.add("menu-item");

  const cookieDescription = document.createElement("div");
  cookieDescription.classList.add("item-description");

  const cookieTitle = document.createElement("h4");
  cookieTitle.textContent = "Cookie Platter";
  cookieDescription.appendChild(cookieTitle);

  const cookieText = document.createElement("p");
  cookieText.textContent = "Peanut butter, chocolate chip, caramel, pistachio, cinnamon";
  cookieDescription.appendChild(cookieText);

  cookie.appendChild(cookieDescription);

  const cookiePrice = document.createElement("p");
  cookiePrice.classList.add("price");
  cookiePrice.textContent = "$7 per person";
  cookie.appendChild(cookiePrice);

  desserts.appendChild(cookie);

  // Pie Platter
  const pie = document.createElement("div");
  pie.classList.add("menu-item");

  const pieDescription = document.createElement("div");
  pieDescription.classList.add("item-description");

  const pieTitle = document.createElement("h4");
  pieTitle.textContent = "Pie Platter";
  pieDescription.appendChild(pieTitle);

  const pieText = document.createElement("p");
  pieText.textContent = "Apple, custard, cream, lemon meringue, banana";
  pieDescription.appendChild(pieText);

  pie.appendChild(pieDescription);

  const piePrice = document.createElement("p");
  piePrice.classList.add("price");
  piePrice.textContent = "$12 per person";
  pie.appendChild(piePrice);

  desserts.appendChild(pie);

  // Cake Platter
  const cake = document.createElement("div");
  cake.classList.add("menu-item");

  const cakeDescription = document.createElement("div");
  cakeDescription.classList.add("item-description");

  const cakeTitle = document.createElement("h4");
  cakeTitle.textContent = "Cake Platter";
  cakeDescription.appendChild(cakeTitle);

  const cakeText = document.createElement("p");
  cakeText.textContent = "Coffee, black forest, cheery cheesecake, vanilla, carrot";
  cakeDescription.appendChild(cakeText);

  cake.appendChild(cakeDescription);

  const cakePrice = document.createElement("p");
  cakePrice.classList.add("price");
  cakePrice.textContent = "$11 per person";
  cake.appendChild(cakePrice);

  desserts.appendChild(cake);

  // Assorted Platter
  const assorted = document.createElement("div");
  assorted.classList.add("menu-item");

  const assortedDescription = document.createElement("div");
  assortedDescription.classList.add("item-description");

  const assortedTitle = document.createElement("h4");
  assortedTitle.textContent = "Assorted Platter";
  assortedDescription.appendChild(assortedTitle);

  const assortedText = document.createElement("p");
  assortedText.textContent = "Brownies, donuts, yogurts, jello, fruits";
  assortedDescription.appendChild(assortedText);

  assorted.appendChild(assortedDescription);

  const assortedPrice = document.createElement("p");
  assortedPrice.classList.add("price");
  assortedPrice.textContent = "$12 per person";
  assorted.appendChild(assortedPrice);

  desserts.appendChild(assorted);
  menu.appendChild(desserts);
  main.appendChild(menu);

  // Testimonials
  const testimonialsWrapper = document.createElement("div");
  testimonialsWrapper.classList.add("testimonials-wrapper");

  const testimonialsTitle = document.createElement("h2");
  testimonialsTitle.textContent = "Testimonials";
  testimonialsWrapper.appendChild(testimonialsTitle);

  const testimonials = document.createElement("div");
  testimonials.classList.add("testimonials");
  
  // Create one, copy the rest
  // Testimonial 1
  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial");

  // Isn't a pic. Just an imitation by a round div
  const testimonialPic = document.createElement("div");
  testimonialPic.classList.add("testimonial-pic");
  testimonial.appendChild(testimonialPic);

  const testimonialStars = document.createElement("div");
  testimonialStars.classList.add("testimonial-stars");

  // Create one, copy the rest
  const testimonialStar = document.createElement("img");
  testimonialStar.classList.add("testimonial-star");
  testimonialStar.src = starSrc;
  testimonialStar.setAttribute("width", "27px");
  testimonialStar.setAttribute("height", "27px");
  testimonialStars.appendChild(testimonialStar);

  for (let i = 1; i <= 4; i++) testimonialStars.appendChild(testimonialStar.cloneNode());
  
  testimonial.appendChild(testimonialStars);

  const testimonialTitle = document.createElement("h4");
  testimonialTitle.textContent = "Assorted Platter";
  testimonial.appendChild(testimonialTitle);

  const testimonialText = document.createElement("p");
  testimonialText.textContent = "Great place to have a delicious, fancy dinner out!";
  testimonial.appendChild(testimonialText);

  const testimonialPerson = document.createElement("p");
  testimonialPerson.classList.add("testimonial-person");
  testimonialPerson.innerHTML = "<span style='font-weight: 700'>Andrew J</span> - 2019-05-21";
  testimonial.appendChild(testimonialPerson);

  for (let i = 1; i <= 3; i++) testimonials.appendChild(testimonial.cloneNode(true));

  testimonialsWrapper.appendChild(testimonials);
  main.appendChild(testimonialsWrapper);  
}

