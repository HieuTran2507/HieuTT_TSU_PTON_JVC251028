let text = document.querySelector(`.text`);
let btnshow = document.querySelector(`.btnshow`);
let btnhide = document.querySelector(`.btnhide`);
btnhide.onclick = function(){
    text.style.display = `none`;
};
btnshow.onclick = function(){
    text.style.display = `block`;
};