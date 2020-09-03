$(document).ready(function () {

  // applico colore nero al testo al click dell'utente
  $("li > a").click(
    function () {
      $("li > a").removeClass("active");
      $(this).addClass("active");
    }
  );

  // visualizzo e nascondo menu a tendina all'hover dell'utente
  $(".open_menu").hover(
    function () {
      $(this).children("[class*='m_tendina']").slideToggle();
    }
  );

});
