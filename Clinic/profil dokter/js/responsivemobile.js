$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true, // default ON

    responsive: {
      0: {
        items: 1,
        nav: false   // 📱 MOBILE → arrow HILANG
      },
      768: {
        items: 2,
        nav: true    // 💻 TABLET ke atas → arrow MUNCUL
      },
      1024: {
        items: 3,
        nav: true
      }
    }
  });
});



  // Ambil semua <p> dalam card_text
  document.querySelectorAll('.card_text p').forEach(p => {
    p.addEventListener('click', () => {
      p.classList.toggle('expanded');
    });
  });

  document.querySelectorAll('.card_text h4').forEach(p => {
    p.addEventListener('click', () => {
      p.classList.toggle('expanded');
    });
  });

