/* eslint-disable no-undef */
/* MENU FUNCTION */

const openMenu = document.getElementById('menu');
const nav = document.querySelector('nav');
const overFlowY = document.querySelector('html');
const menuClass = document.querySelector('.menu-icon');
const closeMenuClass = document.querySelector('.close-menu-icon');
const overlaySection = document.querySelector('.overlay');
const main = document.querySelector('.main-section');

openMenu.addEventListener('click', () => {
  nav.style.visibility = ('visible');
  overFlowY.style.overflowY = ('hidden');
  menuClass.style.display = 'none';
  closeMenuClass.style.display = 'flex';
  overlaySection.style.visibility = 'hidden';
  main.style.visibility = 'hidden';
});

closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', () => {
  closeMenuClass.style.display = 'none';
  nav.style.visibility = 'hidden';
  overFlowY.style.overflowY = 'visible';
  menuClass.style.display = 'flex';
  overlaySection.style.visibility = 'visible';
  main.style.visibility = 'visible';
});

/* FEATURED SECTION FUNCTIONS */
const featuredGuest = [
  {
    image: './img/gordon-ramsay-qa-thumbnail.webp',
    name: 'Gordon Ramsay',
    description: 'British chef, restaurateur, television personality, food critic, and writer.',
    description2: 'Ramsay is one of the best-known and most influential chefs in the United Kingdom.',
    tiktok: 'https://www.tiktok.com/@gordonramsayofficial',
    youtube: 'https://www.youtube.com/user/gordonramsay',
    instagram: 'https://www.instagram.com/gordongram/',
    twitter: 'https://twitter.com/GordonRamsay',
  },

  {
    image: './img/oscar-meza.webp',
    name: 'Oscar Meza',
    description: 'chef, YouTuber with more than 8.7 millions subs on his youtube channel named "La Capital".',
    description2: 'Oscar is one of the best-known YouTubers in terms of cooking recipes, he currently has his own first-class butcher shop',
    tiktok: 'https://www.tiktok.com/@lacapital16',
    youtube: 'https://www.youtube.com/c/lacapitalcocina',
    instagram: 'https://www.instagram.com/oscarmezar/',
    twitter: 'https://twitter.com/oscar_mezar/media',
  },

  {
    image: './img/munchies-lab.webp',
    name: 'Martín R.',
    description: 'chef, YouTuber with more than 1.2 millions subs on his youtube channel named "Munchies Lab".',
    description2: 'His recipes are more of a Mexican tradition',
    tiktok: 'https://www.tiktok.com/@munchieslab',
    youtube: 'https://www.youtube.com/c/MunchiesLab',
    instagram: 'https://www.instagram.com/munchieslabs/',
    twitter: 'https://twitter.com/munchieslab',
  },

  {
    image: './img/mexicocookingclub.webp',
    name: 'Calixto Serna',
    description: 'chef, YouTuber with more than 10.6 millions followers on his tiktok account named "mexicocookingclub".',
    description2: 'It has recipes for almost any dish, from gourmet to a simple sandwich.',
    tiktok: 'https://www.tiktok.com/@mexicocookingclub',
    youtube: 'https://www.youtube.com/channel/UCigvm_q9Giy06xwUeIVdOoA',
    instagram: 'https://www.instagram.com/mexicocookingclub/',
    twitter: 'https://twitter.com/',
  },
];

const FeaturedSection = document.querySelector('.featured-guests');
for (let i = 0; i < featuredGuest.length; i += 1) {
  const guestContent = document.createElement('div');
  guestContent.classList.add('guest-content');
  guestContent.innerHTML = `
    <div class="guest-content--img">
    <img src=${featuredGuest[i].image} alt="">
    <div class="guest-img--background"></div>
    <div class="guest-links">
    <a href=${featuredGuest[i].tiktok}><i class="links-icons fa-brands fa-tiktok"></i></a>
    <a href=${featuredGuest[i].youtube}><i class="links-icons fa-brands fa-youtube-square"></i></a>
    <a href=${featuredGuest[i].instagram}><i class="links-icons fa-brands fa-instagram"></i></a>
    <a href=${featuredGuest[i].twitter}><i class="links-icons fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="guest-content--description">
    <h2 class="guest-name">${featuredGuest[i].name}</h2>
    <p class="guest-content--description1">${featuredGuest[i].description}</p>
    <div class="guest-content--border"></div>
    <p class="guest-content--description2">${featuredGuest[i].description2}</p>
</div>
    `;
  FeaturedSection.appendChild(guestContent);
}
