(function(doc) {
  "use strict";
  const siteHeader = doc.getElementById("site-header");
  const nav = doc.querySelector("#site-header .nav");
  const projectsMenu = doc.querySelector("#site-header .menu-section__content");
  const toggleNav = doc.querySelector("#site-header .toggle_nav");

  siteHeader.addEventListener("click", e => {
    if (e.target.dataset.toggleQuery) {
      const query = e.target.dataset.toggleQuery;
      const elem = doc.querySelector(`#site-header .${query}`);
      elem.classList.toggle(`${query}_hidden`);

      if (e.target == toggleNav) {
        e.target.classList.toggle("toggle_close");
      }
    } else {
      nav.classList.add("nav_hidden");
      projectsMenu.classList.add("menu-section__content_hidden");
      toggleNav.classList.remove("toggle_close");
    }
  });
})(document);
