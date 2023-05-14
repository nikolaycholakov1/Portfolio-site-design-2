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
const boxes = document.querySelectorAll(".droppable");
const backendBtn = document.getElementById("drag-backend");
const frontendBtn = document.getElementById("drag-frontend");
const toolsBtn = document.getElementById("drag-tools");

frontendBtn.addEventListener("click", () => {
  console.log("frontend clicked");
});

backendBtn.addEventListener("click", () => {
  console.log("backend clicked");
});

toolsBtn.addEventListener("click", () => {
  console.log("tools clicked");
});

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    // console.log(box.parentElement);
    // const drop = box.querySelectorAll(".droppable");
    // console.log(drop);
    // console.log(box.innerHTML.length);
    // if (box.innerHTML.length < 90) {
    //   box.classList.remove("full");
    // } else if (box.innerHTML.length > 100) {
    //   box.classList.add("full");
    // }
  });
});
