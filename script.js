$(function () {
  var bgImages = [
    "https://picsum.photos/1366/768?random=1",
    "https://picsum.photos/1366/768?random=2"
  ];

  function preload(src) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.crossOrigin = "anonymous";
      img.src = src;
    });
  }

  function reveal() {
    $("html, body").css({ filter: "none", opacity: 1 });
    $("body").css("overflow-y", "scroll");
  }

  if (window.Promise) {
    Promise.all(bgImages.map(preload)).then(reveal);
    $(window).on("load", reveal);
  } else {
    $(window).on("load", reveal);
  }

  // robust smooth-scroll
  $("a[href^='#']").on("click", function (e) {
    var href = $(this).attr("href");
    if (!href || href === "#") return;

    var $target = $(href);
    if (!$target.length) return;

    e.preventDefault();

    $("html, body").animate(
      { scrollTop: $target.offset().top },
      500,
      "linear"
    );
  });
});
