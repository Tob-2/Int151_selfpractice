// array
 let a = [1,2,3,4,5];
 let b = 0;
for (let i of a) {
    b += i;
}
console.log(b)

//ข้อ2 โจทย์: แยกเลขคู่และเลขคี่ออกจากกัน
let a2 = [1,5,2,4,6,9,7,8,3,11];
let b2 = [];
let c = [];
for (let i of a2) {
    if (i % 2 ===0){
        b2 += i +',' ;
    }
    else {c += i + ',';}
}
console.log(c,b2)

//ข้อ3 หาตัวอักษรที่เจอบ่อยที่สุดในข้อความ
let text = 'Hello worlddddd'
let word = '';
let a3 = text.splice(' ');
for (let i of a3) {
    
}