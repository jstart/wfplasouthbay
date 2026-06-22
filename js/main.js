(function () {
  "use strict";

  function applyConfig() {
    if (typeof WFP_CONFIG === "undefined") return;

    document.querySelectorAll("[data-config]").forEach(function (el) {
      var key = el.getAttribute("data-config");
      var value = WFP_CONFIG[key];
      if (!value) return;

      if (key === "contactEmail" && el.tagName === "A") {
        el.href = "mailto:" + value;
        el.textContent = value;
      } else if (el.tagName === "A") {
        el.href = value;
      } else if (el.tagName === "FORM" && key === "formspreeId") {
        el.action = "https://formspree.io/f/" + value;
      } else if (el.tagName !== "FORM") {
        el.textContent = value;
      }
    });

  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var successMsg = document.getElementById("form-success");
    var errorMsg = document.getElementById("form-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (successMsg) successMsg.classList.remove("is-visible");
      if (errorMsg) errorMsg.classList.remove("is-visible");

      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (successMsg) successMsg.classList.add("is-visible");
            successMsg.focus();
            return;
          }
          throw new Error("Form submission failed");
        })
        .catch(function () {
          if (errorMsg) errorMsg.classList.add("is-visible");
          errorMsg.focus();
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
          }
        });
    });
  }

  applyConfig();
  initMobileNav();
  initContactForm();
})();
