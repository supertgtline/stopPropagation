import "./styles.css";

const btnActionEle = document.querySelector(".action");
const modalEle = document.querySelector(".modal");
const btnShowEle = document.querySelector(".btn-show");

btnShowEle.addEventListener("click", function (e) {
  modalEle.classList.add("active");
});

btnActionEle.addEventListener("click", function (e) {
  e.stopPropagation();

  window.alert("button.action clicked");
});

modalEle.addEventListener("click", function (e) {
  window.alert("div.modal clicked");
  this.classList.remove("active");
});
