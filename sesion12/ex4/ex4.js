let bai = prompt(`nhập bài số (1-7)`);
switch (bai){
    case`1`:
        for(let i = 0; i<100; i++){
            console.log(i);
        }
        alert(` hoàn thành in từ 0-99`);
        break;
    case`2`:
        let temp = Number(prompt(` nhập nhiệt độ hiện tại `));
        if(temp >100){
            alert(` hãy giảm nhiệt độ`);
        } else if(temp<20){
            alert(` hãy tăng nhiệt độ`);
        } else alert(` nhiệt độ ổn định `);
        break;
    case`3`:
        let f0 = 0, f1 = 1;
        console.log(f0);
        console.log(f1);
        for (let i = 2; i < 20; i++) {
            let fn = f0 + f1;
            console.log(fn);
            f0 = f1;
            f1 = fn;
        }
        break;
    case`4`:
        let F0 = 0, F1 = 1;
        for (let i = 2; i < 20; i++) {
            let Fn = F0 + F1;
            if(Fn%5 === 0) {
                console.log(Fn);
                break
            }
            else{
                F0 = F1;
                F1 = Fn;
            }  
        }
        break;
    case`5`:
        let f_0 = 0;
        let f_1 = 1;
        let sum = 0;
        for (let i = 2; i < 20; i++) {
            let fn = f_0 + f_1;
            sum = sum + fn;
            f_0 = f_1;
            f_1 = fn;
        }
        console.log(sum);
        break;
    case`6`:
        let k = 1;
        let num = 0;
        let Sum = 0;
        while(k<30){
            if(num%7===0){
                Sum = Sum + num;     
                // console.log(num);
                k++;
                num++;
            } else num++;
        }
        console.log(Sum);
        break;
    case`7`:
        for(let m = 1; m<100; m++){
            if(m%3===0) {
                if(m%5===0) console.log(`fizzbuzz`);
                else console.log(`fizz`);
            }
            else if(m%5===0) console.log(`buzz`);
            else console.log(m);
        }
        break;
    default:
        alert(` ${bai} không có trong danh sách `);
        break;
}