
let ctr = true
let students = [];
let student = {
            id : 1,
            name : 'nguyen van a',
            gender : 'nam',
            age : 20,
            mark : 8
        }
students.push(student);
let newStudent = structuredClone(student);
let newStudent1 = structuredClone(student);
while(ctr){
    let bai = Number(prompt('nhập số bài'));
    switch(bai){
    case 1:
        let obj1 = {
            ten : "tran tuan hieu",
            tuoi: 23,
            dia_chi: "Toyama, Takaoka",
            sdt: "07085467017"
        }
        console.log('tên: ',obj1.ten);
        console.log('tuổi: ',obj1.tuoi);
        console.log('địa chỉ: ',obj1.dia_chi);
        console.log('số điện thoại: ',obj1.sdt);
        break;
    case 2:
        
        newStudent.id = 2;
        newStudent.name = 'tran tuan hieu';
        newStudent.mark = 9;
        students.push(newStudent);

        newStudent1.id = 3;
        newStudent1.name = 'tran van c';
        newStudent1.mark = 10;
        students.push(newStudent1);

        console.log(students);
        break;
    case 3:
        let maxStudent = students[0]
        for(let i in students){
            if(students[i].mark>maxStudent.mark) maxStudent = students[i];
        }
        console.log(maxStudent);
        break;   
    case 4:
        ctr = false;
        break; 
    default:
        console.log('không có trong danh sách bài tập');
    }
}
