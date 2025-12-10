const screen = document.getElementById("calculate_scr");
function press(value){
    screen.value += value;
}
function clearscr(){
    screen.value = "";
}
function calculate(){
    try{
        if(screen.value.includes("/0")){
            alert("lỗi! không chia được cho 0");
            return;
        }
        let result = eval(screen.value);
        if (isNaN(result)) {
                alert("Phép tính không hợp lệ!");
                return;
            }
            screen.value = result;
        } 
    catch (error) {
        alert("Lỗi: Nhập không hợp lệ!");
    }
}
    
