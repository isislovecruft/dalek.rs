(function(doc) {
  "use strict";
  const siteHeader = doc.getElementById("site-header");
  const nav = doc.querySelector("#site-header .nav");
  const projectsMenu = doc.querySelector("#site-header .menu-section__content");

  siteHeader.addEventListener("click", e => {
    if (e.target.dataset.toggleQuery) {
      const query = e.target.dataset.toggleQuery;
      const elem = doc.querySelector(`.${query}`);
      elem.classList.toggle(`${query}_hidden`);
    } else {
      nav.classList.add("nav_hidden");
      projectsMenu.classList.add("menu-section__content_hidden");
    }
  });
})(document);
