(function() {
  "use strict";
  const toggleNav = document.getElementById("toggle-nav");
  const nav = document.getElementById("nav");

  const toggleProjects = document.getElementById("projects-menu-toggle");
  const projectsMenu = document.getElementById("projects-menu");

  const openOnClick = (target, elem, classes) => {
    target.addEventListener("click", () => {
      elem.classList.toggle(classes);
    });
  };

  openOnClick(toggleNav, nav, "nav_hidden");
  openOnClick(toggleProjects, projectsMenu, "menu-section__content_hidden");

  nav.addEventListener("click", e => {
    if (e.target != toggleNav && e.target != toggleProjects) {
      nav.classList.add("nav_hidden");
      projectsMenu.classList.add("menu-section__content_hidden")
    }
  });
})();
