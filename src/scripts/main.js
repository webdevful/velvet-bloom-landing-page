import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

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

  if ($(".services-slider").length) {
    new Swiper(".services-slider", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      loop: true,
      speed: 0,
      navigation: {
        prevEl: ".services-slider .left-arrow",
        nextEl: ".services-slider .right-arrow",
      },
      pagination: {
        el: ".services-slider .slider-nav",
        clickable: true,
        bulletElement: "span",
        renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
      },
    });
  }

  $("form").on("submit", (event) => {
    event.preventDefault();
  });
});
