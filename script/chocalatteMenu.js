const toggle = document.querySelector("#chocolatte");

const menu = document.querySelector("#menu");

document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.parentElement.id === "chocolatte") {
    if (menu.classList.contains("hidden")) {
      menu.classList.replace("hidden", "block");
    } else {
      menu.classList.replace("block", "hidden");
    }
  } else {
    menu.classList.replace("block", "hidden");
  }
});

// document.addEventListener("click", () => {
//   if (menu.classList.contains("block")) {
//     menu.classList.replace("block", "hidden");
//   }
// });
