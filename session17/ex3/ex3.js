let btnOpen = document.querySelector(`.btnOpen`);
let btnClose = document.querySelector(`.btnClose`);
let overlay = document.querySelector(`.overlay`);
btnOpen.onclick = function(){
    overlay.style.display = `Block`;
};
btnClose.onclick = function(){
    overlay.style.display = `none`;
}