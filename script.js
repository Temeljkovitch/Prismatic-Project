const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");

// Displayinf the Mobile Menu
menu.addEventListener("click", function()
{
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Showing active menu on navigation bar when scrolling
const highlighter = function ()
{
  const element = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const productsMenu = document.querySelector("#products-page");
  let scrollPosition = window.scrollY;

  // Adding the "highlight" class to each menu item
  if (window.innerWidth > 960 && scrollPosition < 600)
  {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }
  else if (window.innerWidth > 960 && scrollPosition < 2100)
  {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    productsMenu.classList.remove("highlight");
    return;
  }
  else if (window.innerWidth > 960 && scrollPosition < 2800)
  {
    productsMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((element && window.innerWidth < 960 && scrollPosition < 600) ||element)
  {
    element.classList.remove("highlight");
  }
}

window.addEventListener("scroll", highlighter);
window.addEventListener("click", highlighter);

// Closing mobile Menu

const hideMobileMenu = () => 
{
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) 
  {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);