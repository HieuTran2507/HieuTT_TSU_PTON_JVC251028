let products = [
    {id: 1, name: 'Milk', count: 100},
    {id: 2, name: 'Orange', count: 100},
    {id: 3, name: 'Butter', count: 100}
];
function show(){
    for(let i in products)
        console.log(products[i]);
    console.log('~~~~~~~~~~~~~~~~~~~~~');
}

let curriculum = [
    {course: 'HTML', complete: false},
    {course: 'CSS', complete: false},
    {course: 'Basic of Javascript', complete: false},
    {course: 'Node package Manager (npm)', complete: false},
    {course: 'Git', complete: false}
];
function show2(){
    for(let i in curriculum){
        console.log(Number(i)+1,curriculum[i].course);
        console.log('Complete: ',curriculum[i].complete);
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~');
}
            

let ctr = true;
while(ctr){
    let bai = Number(prompt("Nhập số bài"));
    switch(bai){
        case 1:
            show();
            let obj1 = {id: 4, name: 'Lemon', count: 100};
            products.push(obj1);
            show();
            let index = products.findIndex(item => item.id === 2);
            if(index !== -1) products.splice(index,1);
            show();
            let index1 = products.findIndex(item => item.id === 3);
            if(index1 !== -1) products[index1].count = 0;
            show();
            let keyword = 'Butter';
            let found = false;
            for(let item of products){
                for(let key in item){
                    if(item[key]===keyword) {
                        console.log('tìm thấy từ khóa',item);
                        found = true;
                        break;
                    }
                }
            }
            if(found === false) console.log('không tìm thấy từ khóa');
            break;
    
        case 2:
            ctr2 = true
            while(ctr2){
                let lenh = prompt('nhap c,r,u,d,e');
                switch(lenh){
                case 'c':
                    let khoahoc = prompt('nhap ten khoa hoc');
                    let obj1 = {course: khoahoc, complete: true};
                    curriculum.push(obj1);
                    show2();
                    break;
                case 'r':
                    show2();
                    break;
                case 'u':
                    let khoahoc_1 = prompt('khóa học muốn update');
                    let status = prompt('nhập trạng thái');
                    let index = curriculum.findIndex(item => item.course===khoahoc_1);
                    if(index!==-1) curriculum[index].complete = Boolean(status);
                    else console.log('khóa học không tồn tại');
                    show2();
                    break;
                case 'd':
                    let khoahoc_2 = prompt('khóa học muốn xóa');
                    let index2 = curriculum.findIndex(item => item.course===khoahoc_2);
                    if(index2!==-1) curriculum.splice(index2,1);
                    else console.log('khóa học không tồn tại');
                    show2();
                    break;
                case 'e':
                    ctr2 = false;
                    break;
                default:
                    console.log('không có trong danh sách bài');
                    break;
            }
            }
            
            break;
            
        case 3:
            ctr = false;
            break;
        default: 
            console.log('không có trong danh sách bài tập');
            break;  
    }
}