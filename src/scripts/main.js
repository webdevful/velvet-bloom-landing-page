import $ from "jquery";

window.jQuery = $;
window.$ = $;

$(() => {
  const $body = $("body");
  const $menu = $(".navbar-menu");
  const $navButton = $(".nav-button");

  const closeMenu = () => {
    $menu.removeClass("open");
    $navButton.removeClass("open").attr("aria-expanded", "false");
    $body.removeClass("no-scroll");
  };

  $navButton.on("click", () => {
    const open = !$menu.hasClass("open");
    $menu.toggleClass("open", open);
    $navButton.toggleClass("open", open).attr("aria-expanded", open ? "true" : "false");
    $body.toggleClass("no-scroll", open);
  });

  $(".header-nav-link").on("click", closeMenu);

  $(".dropdown-toggle").on("click", function () {
    const $toggle = $(this);
    const wasOpen = $toggle.hasClass("open");

    $(".dropdown-toggle").removeClass("open").attr("aria-expanded", "false");
    $(".dropdown-list").removeClass("open");

    if (!wasOpen) {
      $toggle.addClass("open").attr("aria-expanded", "true");
      $toggle.next(".dropdown-list").addClass("open");
    }
  });

  const $popup = $(".popup");
  const closePopup = () => {
    $popup.removeClass("open").attr("aria-hidden", "true");
    $body.removeClass("no-scroll");
  };

  $("[data-open-popup]").on("click", (event) => {
    event.preventDefault();
    closeMenu();
    $popup.addClass("open").attr("aria-hidden", "false");
    $body.addClass("no-scroll");
  });

  $(".popup-close").on("click", closePopup);
  $popup.on("click", function (event) {
    if (event.target === this) closePopup();
  });

  const $lightbox = $(".lightbox-overlay");
  const $lightboxImage = $lightbox.find("img");
  const closeLightbox = () => {
    $lightbox.removeClass("open").attr("aria-hidden", "true");
    $body.removeClass("no-scroll");
  };

  $(".gallery-image").on("click", function () {
    $lightboxImage.attr({ src: this.src, alt: this.alt });
    $lightbox.addClass("open").attr("aria-hidden", "false");
    $body.addClass("no-scroll");
  });

  $(".lightbox-close").on("click", closeLightbox);
  $lightbox.on("click", function (event) {
    if (event.target === this) closeLightbox();
  });

  $(document).on("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
      closeLightbox();
      closeMenu();
    }
  });

  const $slides = $(".services-slide");
  const $dots = $(".slider-nav span");
  let activeSlide = 0;

  const showSlide = (index) => {
    if (!$slides.length) return;
    activeSlide = (index + $slides.length) % $slides.length;
    $slides.removeClass("active").eq(activeSlide).addClass("active");
    $dots.removeClass("active").eq(activeSlide).addClass("active");
  };

  $(".left-arrow").on("click", () => showSlide(activeSlide - 1));
  $(".right-arrow").on("click", () => showSlide(activeSlide + 1));
  showSlide(0);

  $("form").on("submit", (event) => {
    event.preventDefault();
  });
});
