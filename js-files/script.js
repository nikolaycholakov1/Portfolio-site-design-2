const backendBtn = document.getElementById("drag-backend");
const frontendBtn = document.getElementById("drag-frontend");
const toolsBtn = document.getElementById("drag-tools");

const contentWindow = document.querySelector(".content");

const frontEndContainer = document.querySelector(".front-end-content");
const backendContainer = document.querySelector(".back-end-content");
const toolsContainer = document.querySelector(".tools-content");

const windowButtons = {
  minimizeBtn: document.querySelector(".minimize-window"),
  expandBtn: document.querySelector(".expand-window"),
  closeFrontBtn: document.querySelector(".close-frontend-window"),
  closeBackBtn: document.querySelector(".close-backend-window"),
  closeToolsBtn: document.querySelector(".close-tools-window"),
};

frontendBtn.addEventListener("click", () => {
  contentWindow.style.display = "block";
  frontEndContainer.style.display = "block";
});

backendBtn.addEventListener("click", () => {
  contentWindow.style.display = "block";
  backendContainer.style.display = "block";
});

toolsBtn.addEventListener("click", () => {
  contentWindow.style.display = "block";
  toolsContainer.style.display = "block";
});

// THREE BUTTONS
windowButtons.closeFrontBtn.addEventListener("click", () => {
  contentWindow.style.display = "none";
});

windowButtons.closeBackBtn.addEventListener("click", () => {
  contentWindow.style.display = "none";
});

windowButtons.closeToolsBtn.addEventListener("click", () => {
  contentWindow.style.display = "none";
});
