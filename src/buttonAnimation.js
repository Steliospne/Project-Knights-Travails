module.exports = function mouseAnimation() {
  document.querySelectorAll(".button_su_inner").forEach((button) => {
    button.addEventListener("mouseenter", function (e) {
      const parentOffset = this.getBoundingClientRect();

      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const circle = this.previousElementSibling;
      circle.style.left = `${relX}px`;
      circle.style.top = `${relY}px`;
      circle.classList.remove("desplode-circle");
      circle.classList.add("explode-circle");
    });

    button.addEventListener("mouseleave", function (e) {
      const parentOffset = this.getBoundingClientRect();

      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const circle = this.previousElementSibling;
      circle.style.left = `${relX}px`;
      circle.style.top = `${relY}px`;
      circle.classList.remove("explode-circle");
      circle.classList.add("desplode-circle");
    });
  });
};
