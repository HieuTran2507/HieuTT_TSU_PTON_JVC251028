let scr = document.getElementById("scr");
function press(value){
    scr.value += value;
}
// function clearscr(){
//     scr.value = scr.value.slice(0,-1);
// }
let btn_clr = document.querySelector(".btn_clr");
btn_clr.addEventListener("click", function(){
    scr.value = scr.value.slice(0,-1);
});
btn_clr.addEventListener("dblclick", function(){
    scr.value = "";
});