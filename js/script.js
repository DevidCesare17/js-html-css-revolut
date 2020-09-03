$(document).ready(function () {

  // applico colore nero al testo al click dell'utente
  $("li > a").click(
    function () {
      $("li > a").removeClass("active");
      $(this).addClass("active");
    }
  );

  // visualizzo e nascondo menu a tendina all'hover dell'utente
  $(this).mouseover(
    function () {
      $(".m_tendina_1").toggle();
    }
  );

});
