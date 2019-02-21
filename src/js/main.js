(function(doc) {
  "use strict";
  const siteHeader = doc.getElementById("site-header");
  const nav = doc.querySelector("#site-header .nav");

  siteHeader.addEventListener("click", e => {
    if (e.target.dataset.toggleQuery != null) {
      const query = e.target.dataset.toggleQuery;
      const elem = doc.querySelector(`.${query}`);

      elem.classList.toggle(`${query}_hidden`);
    } else {
      nav.classList.add("nav_hidden");
    }
  });
})(document);
