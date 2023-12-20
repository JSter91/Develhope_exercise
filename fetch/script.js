const container = document.querySelector(".container")
const btn = document.querySelector("button")
const name = document.createElement("h2");
const img = document.createElement("img");



const getData = async ()=>{
  try {
    const inputValue = document.querySelector("input").value
    let res = await fetch(`https://ringsdb.com/api/public/card/${inputValue}.json?_format=json`);
    let data = await res.json();
    console.log(data);
    name.textContent = data.name
    img.setAttribute("src", `https://ringsdb.com/${data.imagesrc}`);

    container.append(name, img);
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", getData)

