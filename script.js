// const btn = document.querySelector("button");
// const input = document.getElementById("input-todo");
// const item = document.getElementById("todo-item");
// const form = document.getElementById("add-todo-form");

// btn.addEventListener("click", function () {
//   let inputValue = input.value;
//   const div = document.createElement("div");
//   div.innerHTML = inputValue;
//   item.appendChild(div);
//   div.addEventListener("click", function () {
//     item.removeChild(div);
//   });
// });
const input = document.querySelector("#input-todo");
const btn = document.querySelector("button");
const result = document.querySelector("#todo-output");

btn.addEventListener("click", () => {
  if (input.value === "") return;

  createDeleteElements(input.value);
  input.value = "";
});

function createDeleteElements(value) {
  console.log(value);
  const p = document.createElement("p");
  p.className = "p";
  p.textContent = value;
  p.addEventListener("click", () => result.removeChild(p));

  result.appendChild(p);
}
