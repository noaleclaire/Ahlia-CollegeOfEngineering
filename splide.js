document.addEventListener('DOMContentLoaded', function () {
  // Configuration du carousel principal
  var primaryCarousel = new Splide('#primary-carousel', {
    // Configuration du carousel principal
    // ...
    // Par exemple :
    type: 'fade',
    rewind: true,
    heightRatio: 0.5,
    pagination: false,
    focus: 'center',
    cover: true,
    arrows: false,
    breakpoints: {
      640: {
        heightRatio: 0.8,
      },
      480: {
        heightRatio: 0.6,
      },
    },
  });

  // Configuration du carousel de miniatures
  var thumbnailCarousel = new Splide('#thumbnail-carousel', {
    // Configuration du carousel de miniatures
    // ...
    // Par exemple :
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 10,
    rewind: true,
    focus: 'center',
    pagination: false,
    cover: true,
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 40,
      },
    },
  });
  primaryCarousel.sync(thumbnailCarousel);
  primaryCarousel.mount();
  thumbnailCarousel.mount();
});