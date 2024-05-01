$(document).ready(function () {
  $(".slideshow").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  });

  $("#feedbackForm").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: form.attr("method"),
      url: form.attr("action"),
      data: form.serialize(),
      dataType: "json",
      success: function () {
        window.location.href = "thank.html";
      }
    });
  });
});
