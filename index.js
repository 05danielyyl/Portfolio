$(document).ready(function () {
  var top = $(".navbar").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > top) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

const percent = [90, 90, 85, 83, 78, 75];

const p_percent = document.querySelectorAll(".prograss-precent");

p_percent.forEach((item, number) => {
  item.style.width = percent[number] + "%";
  console.log(item.previousElementSibling.firstElementChild);
  item.previousElementSibling.firstElementChild.textContent =
    percent[number] + "%";
});
