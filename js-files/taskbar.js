const leftSideButtons = {
  openSearchBox: document.querySelector(".search"),
  closeSearchBox: document.querySelector(".close-search-box"),
  windowsButton: document.querySelector(".windows"),
};

const rightSideButtons = {
  notificationsButton: document.querySelector(".notifications-btn"),
};

const searchWindow = document.querySelector(".search-window");
const windowsWindow = document.querySelector(".windows-menu-window");
const notificationsWindow = document.querySelector(".notifications-container");

leftSideButtons.windowsButton.addEventListener("click", () => {
  if (windowsWindow.style.display === "block") {
    windowsWindow.style.display = "none";
  } else if ((windowsWindow.style.display = "none")) {
    windowsWindow.style.display = "block";
  }
});

leftSideButtons.openSearchBox.addEventListener("click", () => {
  if (searchWindow.style.display === "block") {
    searchWindow.style.display = "none";
  } else if ((searchWindow.style.display = "none")) {
    searchWindow.style.display = "block";
  }
});

// leftSideButtons.closeSearchBox.addEventListener("click", () => {
//   searchWindow.style.display = "none";
// });

rightSideButtons.notificationsButton.addEventListener("click", () => {
  if (notificationsWindow.style.display === "block") {
    notificationsWindow.style.display = "none";
  } else if ((notificationsWindow.style.display = "none")) {
    notificationsWindow.style.display = "block";
  }
});
