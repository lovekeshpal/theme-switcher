const input = document.querySelector(".theme-switcher input");
const heading = document.querySelector("h1");

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    heading.innerHTML = "This is dark mode";
  } else {
    document.body.setAttribute("data-theme", "light");
    heading.innerHTML = "This is light mode";
  }
});
