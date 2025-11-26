let bai = prompt(`nhập bài số (1-8)`);
switch (bai){
    case`1`:
        let doC = Number(prompt(` nhập độ C`));
        let doF = doC*9/5+32;
        alert(`${doF} F`);
        break;
    case`2`:
        let metter = Number(prompt(` nhập metter`));
        let feet = metter*3.2808399;
        alert(`${feet} Feet`);
        break;
    case`3`:
        let a = Number(prompt(` nhập cạnh hình vuông (m)`));
        let area = a*a;
        alert(`diện tích hình vuông là ${area} m＾2`);
        break;
    case`4`:
        let cd = Number(prompt(` nhập chiều dài hình chữ nhật (m)`));
        let cr = Number(prompt(` nhập chiều rộng hình chữ nhật (m)`));
        let dt = cd*cr;
        alert(`diện tích hình chữ nhật là ${dt} m＾2`);
        break;
    case`5`:
        let cgv1 = Number(prompt(` nhập cạnh góc vuông thứ nhất (m)`));
        let cgv2 = Number(prompt(` nhập cạnh góc vuông thứ hai (m)`));
        let s_tg = (1/2)*cgv1*cgv2;
        alert(`diện tích hình tam giác là ${s_tg} m＾2`);
        break;
    case`6`:
        let hs1 = Number(prompt(` (ax + b = 0) nhập  a` ));
        let hs2 = Number(prompt(` (ax + b = 0) nhập  b` ));
        let x = -hs2/hs1;
        alert(`x = ${x}`);
        break;
    case`7`:
        let A = Number(prompt(` (ax＾2 + bx + c = 0) nhập  a` ));
        let B = Number(prompt(` (ax＾2 + bx + c = 0) nhập  b` ));
        let C = Number(prompt(` (ax＾2 + bx + c = 0) nhập  c` ));
        let delta = B*B-4*A*C;
        let n,n1,n2 = null;
        if(delta < 0){
            alert(` phương trình vô nghiệm `);
        } else if (delta === 0){
            n = -B / (2 * A);
            alert(` phương nghiệm kép x = ${n} `);
        } else{
            n1 = (-B + Math.sqrt(delta)) / (2 * A);
            n2 = (-B - Math.sqrt(delta)) / (2 * A);
            alert(` phương có 2 nghiệm x1 = ${n1} và x2 = ${n2} `);
        }
        break;
    case`8`:
        let year = Number(prompt(` nhập số tuôi ` ));
        if (Number.isInteger(year) && year<120 && year>0){
            alert(` số tuổi là ${year} `);
        } else{
            alert(` số tuổi đã nhập không phù hợp, vui lòng nhập lại `);
        }
        break;
    default:
        alert(` ${bai} không có trong danh sách `);
        break;
}