(function(doc) {
  "use strict";
  const toggleNav = doc.getElementById("toggle-nav");
  const nav = doc.getElementById("nav");

  const toggleProjects = doc.getElementById("projects-menu-toggle");
  const projectsMenu = doc.getElementById("projects-menu");

  //Togles classes of `elem`, after clicking on `target`
  const toggleOnClick = (target, elem, classes) => {
    target.addEventListener("click", () => elem.classList.toggle(classes));
  };

  toggleOnClick(toggleNav, nav, "nav_hidden");
  toggleOnClick(toggleProjects, projectsMenu, "menu-section__content_hidden");

  nav.addEventListener("click", e => {
    if (e.target != toggleNav && e.target != toggleProjects) {
      nav.classList.add("nav_hidden");
      projectsMenu.classList.add("menu-section__content_hidden");
    }
  });
})(document);
