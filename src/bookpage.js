import { header, main } from "./index.js";
import phoneConsultSrc from "./img/book/book1.jpg";
import onSiteSrc from "./img/book/book2.jpg";

export function renderBook() {
  header.removeAttribute("class");
  header.classList.add("bookpage");

  // Contact us
  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-us");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";
  contactUs.appendChild(contactTitle);

  const form = document.createElement("form");

  const formTitle = document.createElement("h4");
  formTitle.textContent = "Contact us for a custom quote";
  form.appendChild(formTitle);

  const nameWrapper = document.createElement("div");
  nameWrapper.classList.add("field-wrapper");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("field-name");
  nameWrapper.appendChild(nameSpan);

  const name = document.createElement("input");
  name.type = "text";
  name.name = "name";
  name.placeholder = "Name*";
  name.required = "required";
  nameWrapper.appendChild(name);

  form.appendChild(nameWrapper);

  const phoneWrapper = document.createElement("div");
  phoneWrapper.classList.add("field-wrapper");

  const phoneSpan = document.createElement("span");
  phoneSpan.classList.add("field-name");
  phoneWrapper.appendChild(phoneSpan);

  const phone = document.createElement("input");
  phone.type = "tel";
  phone.name = "phone";
  phone.placeholder = "Phone";
  phoneWrapper.appendChild(phone);

  form.appendChild(phoneWrapper);

  const emailWrapper = document.createElement("div");
  emailWrapper.classList.add("field-wrapper");

  const emailSpan = document.createElement("span");
  emailSpan.classList.add("field-name");
  emailWrapper.appendChild(emailSpan);

  const email = document.createElement("input");
  email.type = "email";
  email.name = "email";
  email.placeholder = "Email*";
  email.required = "required";
  emailWrapper.appendChild(email);

  const invalid = document.createElement("span");
  emailWrapper.appendChild(invalid);

  form.appendChild(emailWrapper);

  const needs = document.createElement("textarea");
  needs.name = "needs";
  needs.placeholder = "Tell us more about your dietary needs*";
  needs.required = "required";
  form.appendChild(needs);

  const send = document.createElement("button");
  send.type = "submit";
  send.textContent = "SEND";
  form.appendChild(send);

  const captcha = document.createElement("p");
  captcha.classList.add("captcha");
  captcha.textContent = "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.";
  form.appendChild(captcha);

  contactUs.appendChild(form);

  const chat = document.createElement("h4");
  chat.textContent = "Let's chat about food!";
  contactUs.appendChild(chat);

  const someText = document.createElement("p");
  someText.textContent = "I know you're busy with planning your event, but let's take some time to talk about what you'd like to be eating. The dietary needs of your guests are individualized and unique. Drop us a line, and we can figure out what sort of a meal plan works for your goals!";
  contactUs.appendChild(someText);

  const serve = document.createElement("h4");
  serve.textContent = "Serve";
  contactUs.appendChild(serve);

  const number = document.createElement("p");
  number.textContent = "(480) 505-8877";
  contactUs.appendChild(number);

  main.appendChild(contactUs);

  // Consultation
  const consultation = document.createElement("div");
  consultation.classList.add("consultation");
  
  const consultationTitle = document.createElement("h2");
  consultationTitle.textContent = "Set up a Consultation";
  consultation.appendChild(consultationTitle);

  const phoneConsult = document.createElement("div");
  phoneConsult.classList.add("consult-type");
  
  const phoneConsultPic = document.createElement("img");
  phoneConsultPic.src = phoneConsultSrc;
  phoneConsult.appendChild(phoneConsultPic);

  const phoneConsultText = document.createElement("div");
  
  const phoneConsultTitle = document.createElement("h4");
  phoneConsultTitle.textContent = "Phone Consultation";
  phoneConsultText.appendChild(phoneConsultTitle);

  const phoneConsultPrice = document.createElement("p");
  phoneConsultPrice.classList.add("consultation-cost");
  phoneConsultPrice.textContent = "20 min | free";
  phoneConsultText.appendChild(phoneConsultPrice);

  phoneConsult.appendChild(phoneConsultText);

  const bookPhone = document.createElement("button");
  bookPhone.textContent = "BOOK";
  phoneConsult.appendChild(bookPhone);

  consultation.appendChild(phoneConsult);

  const onSite = document.createElement("div");
  onSite.classList.add("consult-type");

  const onSitePic = document.createElement("img");
  onSitePic.src = onSiteSrc;
  onSite.appendChild(onSitePic);

  const onSiteText = document.createElement("div");
  
  const onSiteTitle = document.createElement("h4");
  onSiteTitle.textContent = "On-site Consultation";
  onSiteText.appendChild(onSiteTitle);

  const onSitePrice = document.createElement("p");
  onSitePrice.classList.add("consultation-cost");
  onSitePrice.textContent = "1 hr | $100";
  onSiteText.appendChild(onSitePrice);

  onSite.appendChild(onSiteText);

  onSite.appendChild(bookPhone.cloneNode(true));
  consultation.appendChild(onSite);

  main.appendChild(consultation)
}