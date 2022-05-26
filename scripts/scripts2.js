/* eslint-disable no-undef */
const openMenu = document.getElementById('menu');
const nav = document.querySelector('nav');
const overFlowY = document.querySelector('html');
const menuClass = document.querySelector('.menu-icon');
const closeMenuClass = document.querySelector('.close-menu-icon');
const overlaySection = document.querySelector('.about-overlay');

openMenu.addEventListener('click', () => {
  nav.style.visibility = ('visible');
  overFlowY.style.overflowY = ('hidden');
  menuClass.style.display = 'none';
  closeMenuClass.style.display = 'flex';
  overlaySection.style.visibility = 'hidden';
});

closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', () => {
  closeMenuClass.style.display = 'none';
  nav.style.visibility = 'hidden';
  overFlowY.style.overflowY = 'visible';
  menuClass.style.display = 'flex';
  overlaySection.style.visibility = 'visible';
});