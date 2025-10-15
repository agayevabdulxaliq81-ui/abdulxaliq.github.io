document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  h1.style.opacity = 0;
  setTimeout(() => {
    h1.style.transition = "opacity 2s";
    h1.style.opacity = 1;
  }, 300);
});
