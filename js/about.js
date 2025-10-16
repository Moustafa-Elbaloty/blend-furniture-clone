// Smooth scroll for the hero down arrow
document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.closest && target.closest(".about-hero__down")) {
    e.preventDefault();
    var anchor = document.querySelector("#who");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

// Mark About link active in header nav + shrink hero on scroll
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("nav .links a");
  links.forEach(function (a) {
    if (/about\s*us\.html$/i.test(a.getAttribute("href") || "")) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });

  // Shrink hero on scroll
  var hero = document.querySelector(".about-hero");
  var lastState = false;
  function onScroll() {
    var shouldShrink = window.scrollY > 80; // threshold
    if (shouldShrink !== lastState) {
      lastState = shouldShrink;
      if (shouldShrink) hero && hero.classList.add("shrink");
      else hero && hero.classList.remove("shrink");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
