document.addEventListener('DOMContentLoaded', function () {
  
  // Mobile Navbar
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Image Lightbox Effect
  const materialbox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialbox);


});