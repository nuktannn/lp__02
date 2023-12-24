//drawer
$(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  $(".drawer-icon").toggleClass("is-checked");
  $(".drawer-nav").toggleClass("is-active");

  return false;
});


$(".drawer-nav [href]").on("click", function (event) {
  $(".drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});

//スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//top-button(スムーススクロール)
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".page__top").addClass("is-show");
  } else {
    jQuery(".page__top").removeClass("is-show");
  }
});
jQuery(".page__top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, "fast");
});
