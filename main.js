let gridContainer = document.querySelector("#gridContainer");

let selectedColor

let colors = document.querySelectorAll(".colors button");
colors.forEach(color  => {
    color.addEventListener("click", (e) => {
        for(color of colors) color.classList.remove("slctClr");
        e.target.classList.add("slctClr");
        selectedColor = e.target.dataset.color
    })
})



let getSize 

let crtDefaultDivs = () => {
    for(i=0; i<64; i++){
    let div = document.createElement("div");
    div.classList.add('div');
    div.style.height = `75px`
    div.style.width = `75px`
    gridContainer.appendChild(div);
    }
}

crtDefaultDivs()


let btns = document.querySelectorAll("#btn")
console.log(btns)

for(btn of btns){
    btn.addEventListener("click", (e) => {
        for(btn of btns)btn.classList.remove("selected")
        e.target.classList.add("selected")
        for(div of document.querySelectorAll(".div")){
            gridContainer.removeChild(div)
        }
        getSize = +e.target.dataset.size
        createDivs()
    })
}

let createDivs = () => {
    for(i=0; i<getSize*getSize; i++){
    let div = document.createElement("div");
    div.classList.add('div');
    div.style.height = `${600/getSize}px`
    div.style.width = `${600/getSize}px`
    gridContainer.appendChild(div);
    }
}
let draw = (e) => {
    if(selectedColor=="random"){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)})`
    }
    e.target.style.backgroundColor = selectedColor||"black"
}

let drawMode = false;
let color = () => {
    let divs = document.querySelectorAll(".div")

    if(!drawMode){
    divs.forEach((div)=>{
        div.addEventListener("mouseover", draw)
    drawMode = true;
    })}
    else{
        divs.forEach((div)=>{
            div.removeEventListener("mouseover", draw)
        })
        drawMode = false;
    }
}
gridContainer.addEventListener("click", color)