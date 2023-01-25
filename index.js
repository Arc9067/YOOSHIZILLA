function getElement(element) {
  let result = document.querySelector(element);
  if (result) {
    return result;
  } else {
    throw new Error(
      `${element} wasnt found pls kindly check there might be some mispells`
    );
  }
}

const navOpen = getElement(".open-nav");
const navUl = getElement(".nav-ul");
const closeNav = getElement(".close-nav");

navOpen.addEventListener("click", () => {
  navUl.classList.add("displayn");
});

closeNav.addEventListener("click", () => {
  navUl.classList.remove("displayn");
});
