// Was able to make modifications off Free Code Camp example
document.addEventListener("DOMContentLoaded", function () {
  var closeButtons = document.querySelectorAll(".close-btn");
  var itemDivs = document.querySelectorAll(".item");

  closeButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      itemDivs[index].style.display = "none";
    });
  });
});

//W3 Schools
document.addEventListener("DOMContentLoaded", function () {
  var items = document.getElementsByClassName("item");
  //So it fills the whole viewport
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  Array.from(items).forEach(function (item) {
    var randomLeft =
      Math.floor(Math.random() * (viewportWidth - item.offsetWidth)) + "px";
    var randomTop =
      Math.floor(Math.random() * (viewportHeight - item.offsetHeight)) + "px";
    item.style.position = "absolute";
    item.style.left = randomLeft;
    item.style.top = randomTop;
  });
});
