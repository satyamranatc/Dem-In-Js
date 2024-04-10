//! -------Targeting HTML Elements -------

//? 1. By Id --> document.getElementById()
//? 2. By Class --> document.getElementsByClassName()
//? 3. By Tag --> document.getElementsByTagName()
//? 4. By QuerySelectors...

let MyH1 = document.getElementById("MyH1");
console.log(MyH1)

let MyH2 = document.getElementsByClassName("MyH3");
console.log(MyH2)

let AllH3 = document.getElementsByTagName("h3");
console.log(AllH3)


let A = document.querySelectorAll(".MyH3");
console.log(A)

let B = document.querySelector(".MyH3");
console.log(A)


//! -----------Controlling HTML Elements -----------

let MyPara = document.getElementById("MyPara");

//? Changing The Content Of any Tag

MyPara.innerText = "Hi By Js";

MyPara.innerText = "<u>Hi By Js</u>"; //? This Will Not Work For HTML
MyPara.innerHTML = "<u>Hi By Js</u>";

// MyPara.textContent = "Changed By JS"


//? Changing The Content Of a Input Tag:
let MyInpt = document.getElementById("MyInpt");
MyInpt.value = "Changed By JS";


//? Changing The Whole Tag Itself:
MyH1.outerHTML = "<p id = 'MyH1'>Hii</p>"
MyH1 = document.getElementById("MyH1");
MyH1.innerHTML = "<p>Hiiiiiiii</p>";



//! ----------Changing The attributes Of a Tag-----

let Img = document.getElementById("MyImg");
// Img.src = "Link Of The Image";
Img.setAttribute("src", "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/658e5b5ebba32-xiaomi-su7-ev-to-take-on-tesla-293837105-16x9.jpg?size=948:533");
Img.setAttribute("height", "200px");
Img.setAttribute("width", "200px");

Img.removeAttribute("height");


//!------------Creating HTML Elements------------

let NewPara = document.createElement("h1");
NewPara.innerText = "Hi By Js";
// document.body.appendChild(NewPara);

let Box = document.getElementById("Box");
Box.appendChild(NewPara);


// !------------Controlling CSS-------------

// ? 1. By style Property
// ? 2. By ClassList

// NewPara.style.backgroundColor = "red"
// NewPara.style.color = "black"

console.log(NewPara.classList)
NewPara.classList.add("Style1")
NewPara.classList.add("Style2")
NewPara.classList.remove("Style1")
NewPara.classList.replace("Style2", "Style3")
// NewPara.classList.toggle("Style3") //? On And Off
console.log(NewPara.classList.contains("Style3"))