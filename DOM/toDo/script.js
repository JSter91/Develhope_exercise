const addProduct = () => {
  let input = document.querySelector("input");
  let list = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = input.value;
  let check = document.createElement("input");
  check.type = "checkbox";

  if (input.value != "") {
    li.appendChild(check);
    list.appendChild(li);
    input.value = "";
  } else {
    alert("inserire qualcosa nella lista");
  }
};
