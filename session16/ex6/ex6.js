function sum(arr){
    let t = arr.reduce((total,curent)=>total+curent,0);
    return t;
}
let t1 = sum([1,2,3,4,5,6]);
let t2 = sum([10,20,30,40,50]);
let t3 = sum([1,3,5,7,9]);
console.log(t1,t2,t3);