$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

/*collapsible*/
$(document).on("show", ".accordion", function (e) {
  //$('.accordion-heading i').toggleClass(' ');
  $(e.target).prev(".accordion-heading").addClass("accordion-opened");
});

$(document).on("hide", ".accordion", function (e) {
  $(this)
    .find(".accordion-heading")
    .not($(e.target))
    .removeClass("accordion-opened");
  //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});
/*collapsible*/

/*carousel*/

// Porfolio isotope and filter
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
});

//testimonires

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1,
});

$(document).ready(function () {
  $(".toggle").click(function () {
    $(".sidebar-contact").toggleClass("active");
    $(".toggle").toggleClass("active");
  });
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

//clock code
var tday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function GetClock() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds(),
    ap;

  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }

  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  var clocktext =
    "" +
    tday[nday] +
    ", " +
    tmonth[nmonth] +
    " " +
    ndate +
    ", " +
    nyear +
    " " +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    ap +
    "";
  document.getElementById("clockbox").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);

//clock code

// Initiate the wowjs animation library
new WOW().init();
