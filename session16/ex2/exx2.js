function minArr(arr){
    let minNum ;
    if(!Array.isArray(arr)){
        alert(` dữ liệu không hợp lệ`);
        return;
    } 
    else if(arr.length === 0){
        
        return minNum = ` mảng trống `;
    }
    else{
        minNum =  arr[0]
        for(let i in arr){
            if(minNum > arr[i]) minNum = arr[i];
        }
        return minNum;
    }
    
}
let min1 = minArr([3,5,1,8,-3,7,8]);
let min2 = minArr([7,12,6,9,20,56,89]);
let min3 = minArr([]);
let min4 = minArr([0,0,0,0,0,0]);
console.log(min1,min2,min3,min4);
