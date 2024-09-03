const $question = document.querySelectorAll(".question");
$question.forEach((item) => {
  let $button = item.querySelector("img");
  let $text = item.querySelector(".text");
  item.addEventListener("click", () => {
    if ($button.getAttribute("alt") == "plus") {
      $button.setAttribute("alt", "minus");
      $button.setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      $button.setAttribute("alt", "plus");
      $button.setAttribute("src", "assets/images/icon-plus.svg");
    }
    $text.classList.toggle("d-none");
  });
});
