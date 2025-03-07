let body = document.body;
let isColorSet = false;


let newEl = document.createElement("div");
newEl.classList.add("main-div");
newEl.style.display = "grid";
newEl.style.placeItems = "center";

newEl.style.margin = "0 auto";
newEl.style.border = "2px solid black";
newEl.style.width = "50%"
newEl.style.padding = "20px";
newEl.style.boxSizing = "border-box";

body.appendChild(newEl);

//Now the div is created....
let heading3 = document.createElement("h3");
heading3.textContent = "##Some Heading##"
newEl.appendChild(heading3);

let para = document.createElement("p");
para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, asperiores! Alias magnam dolorum distinctio quidem cupiditate consequatur modi quibusdam, sapiente ducimus esse nesciunt quaerat voluptas nulla sed incidunt commodi culpa.";
newEl.appendChild(para);

let btn = document.createElement("button");
btn.textContent = "Change BG";
btn.style.display = "grid";
btn.style.placeItems = "center";

btn.addEventListener("click", changeColor);
newEl.appendChild(btn);

let btn2 = document.createElement("button");
btn2.textContent = "Change Text";
btn2.style.display = "grid";
btn2.style.placeItems = "center";

btn2.addEventListener("click", changeTextColor);
newEl.appendChild(btn2);


function changeColor(){
    let card = document.getElementsByClassName("main-div")[0];
    if(isColorSet){
        card.style.backgroundColor = "";
    }
    else{
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);
        let d = Math.floor(Math.random()*10)/10;
        let color = `rgba(${a}, ${b}, ${c}, ${d})`;
    
        // console.log(card);
        console.log(color);
        card.style.backgroundColor = color;
    }
    isColorSet = !isColorSet;
    console.log(isColorSet);
}

function changeTextColor(){
    let card = document.getElementsByClassName("main-div")[0];
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);
        let textColor = `rgb(${a}, ${b}, ${c})`;
    
        // console.log(card);
        console.log(textColor);
        card.style.color = textColor;
}