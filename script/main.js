const inputVal = document.querySelector("#searchVal");
const form = document.querySelector("#searchForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let currentVal = inputVal.value.replace(" ", "+");
  window.location.href = `https://www.google.com/search?q=${currentVal}`;
});
