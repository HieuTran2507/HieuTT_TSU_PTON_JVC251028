function processConfirm(a){
    let ans = confirm(a);
    let result = ``;
    if( ans == true) result += "Excellent. We'll play a nice game of chess.";
    else result += "Maybe later then."
    return result;
}
let check = processConfirm(`ok hoặc cancle`);
console.log(check);