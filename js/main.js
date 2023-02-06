$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
});
$(document).ready(() => {
  $("#menu").click(() => {
    $("#active").toggleClass("active");
  });
});
