let items = document.querySelectorAll('.item');
items.forEach((el)=>{
    el.onmouseover = function(){
        let bgColor = el.getAttribute('id');
        document.body.style.backgroundColor = bgColor;
    }
});

