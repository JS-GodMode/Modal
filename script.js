"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const closeModalFn = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let btnModal of btnsOpenModal) {
  btnModal.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  btnCloseModal.addEventListener("click", closeModalFn);
  overlay.addEventListener("click", closeModalFn);
}
