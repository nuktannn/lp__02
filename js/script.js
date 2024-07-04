//contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");
  const button = form.querySelector(".button");
  const requiredFields = Array.from(
    form.querySelectorAll("input[required], textarea[required]")
  );
  const checkbox = form.querySelector('input[type="checkbox"]');

  const checkForm = () => {
    let isFormValid =
      checkbox.checked &&
      requiredFields.every((field) => field.value.trim() !== "");
    button.disabled = !isFormValid;
    button.style.backgroundColor = isFormValid ? "#159741" : "#BDBDBD";
  };

  checkbox.addEventListener("change", checkForm);
  requiredFields.forEach((field) => field.addEventListener("input", checkForm));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("正常に送信が完了しました");
    form.reset();
    checkForm();
  });

  checkForm();
});

//モーダル
$(function () {
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
  $(".modal__bg").on("click", function (e) {
    e.stopPropagation();
  });
});

//top-button(スムーススクロール)
jQuery(function () {
  var pagetop = $("#page_top"); //page-topが「#pagetop」を取得

  pagetop.hide(); //特定のHTML要素を非表示にする。

  $(window).scroll(function () {
    //widowをスクロースする

    if ($(this).scrollTop() > 80) {
      //80pxスクロールしたら表示

      pagetop.fadeIn(300); //0.3秒かけてフェードイン
    } else {
      pagetop.fadeOut(300); //0.3秒かけてフェードアウト
    }
  });

  pagetop.click(function () {
    //pagetopをクリックしたら

    $("body,html").animate(
      {
        scrollTop: 0, //画面の最上部の位置に移動するという意味
      },
      500
    ); //0.5秒かけてトップへ移動

    return false; //処理の最後に記述する
  });
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    position = jQuery(id).offset().top; // ここで80pxを追加
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
  return false;
});

//WOW
new WOW().init();

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});