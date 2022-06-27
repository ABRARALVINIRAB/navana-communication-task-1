var element = document.getElementById("container");
var toogleBtn1 = document.getElementById("btn-1");
var toogleBtn2 = document.getElementById("btn-2");
var toogleBtn3 = document.getElementById("btn-3");
function button1Function() {

    element.classList.add("btnn-1");
    element.classList.remove("btnn-2")
    element.classList.remove("btnn-3")
    toogleBtn1.classList.add("button-1")
    toogleBtn2.classList.remove("button-2")
    toogleBtn3.classList.remove("button-3")
}
function button2Function() {

    element.classList.add("btnn-2");
    element.classList.remove("btnn-1")
    element.classList.remove("btnn-3")
    toogleBtn2.classList.add("button-2")
    toogleBtn1.classList.remove("button-1")
    toogleBtn3.classList.remove("button-3")

}
function button3Function() {

    element.classList.add("btnn-3");
    element.classList.remove("btnn-1")
    element.classList.remove("btnn-2")
    toogleBtn3.classList.add("button-3")
    toogleBtn1.classList.remove("button-1")
    toogleBtn2.classList.remove("button-2")
}