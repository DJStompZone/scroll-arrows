$(function () {
  var bgImages = [
    "https://picsum.photos/1366/768?random=1",
    "https://picsum.photos/1366/768?random=2",
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

  var reveal = function () {
    $("html, body").css({ filter: "none", opacity: 1 });
    $("body").css("overflow", "scroll");
  };

  if (window.Promise) {
    Promise.all(bgImages.map(preload)).then(reveal);
    $(window).on("load", reveal);
  } else {
    $(window).on("load", reveal);
  }

  $('a[href^="#"]').on("click", function (e) {
    var targetId = $(this).attr("href");

    if (!targetId || targetId === "#") {
      return;
    }

    var $target = $(targetId);

    if (!$target.length) {
      return;
    }

    e.preventDefault();

    $("html, body").animate(
      { scrollTop: $target.offset().top },
      700,
      "linear"
    );
  });
});
