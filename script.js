function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// MY STUFF
// const boxes = document.querySelectorAll(".droppable");
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
  closeBtn: document.querySelector(".close-window"),
};

console.log(windowButtons);

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
});

// THREE BUTTONS
windowButtons.closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contentWindow.style.display = "none";
});

// boxes.forEach((box) => {
//   box.addEventListener("mouseover", () => {
//     console.log(box.parentElement);
//     const drop = box.querySelectorAll(".droppable");
//     console.log(drop);
//     console.log(box.innerHTML.length);
//     if (box.innerHTML.length < 90) {
//       box.classList.remove("full");
//     } else if (box.innerHTML.length > 100) {
//       box.classList.add("full");
//     }
//   });
// });
