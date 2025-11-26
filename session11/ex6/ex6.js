let a = Number(prompt(`nhập vào số a`));
let b = Number(prompt(`nhập vào số b`));
let calc = prompt(`nhập + hoặc - hoặc * hoặc /`);
let result = null;
switch(calc){
    case `+` :
        result = a+b; 
        alert(`${a}+${b}=${result}`); 
        break;
    case `-` :
        result = a-b; 
        alert(`${a}-${b}=${result}`); 
        break;
    case `*` :
        result = a*b; 
        alert(`${a}*${b}=${result}`); 
        break;
    case `/` :
        result = a/b; 
        alert(`${a}/${b}=${result}`); 
        break;
    default: 
        alert(`${calc} chưa có trong thư viện`);
        break
}
