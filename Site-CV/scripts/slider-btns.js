let btn =document.querySelector(".btn");
let slide = document.querySelector("#slide");

btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)"
}
btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)"
}
btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)"
}
btn[3].onclick = function () {
    slide.style.transform = "translateX(-2400px)"
}
btn[4].onclick = function () {
    slide.style.transform = "translateX(-4800px)"
}
btn[5].onclick = function () {
    slide.style.transform = "translateX(-9600px)"
}