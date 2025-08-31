// โจทย์ 1:
// ให้ผลรวมของตัวเลขทั้งหมดในอาเรย์
let a = [1,2,3,4,5]
let b = a.reduce((x,y) => x + y)
console.log(b)
// โจทย์ 2:
// ให้นับจำนวนครั้งที่แต่ละตัวอักษรปรากฏในอาเรย์
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
let b2 = letters.reduce((x,y) => {x[y] = ((x[y]) || 0) += 1; return x},{})
console.log(b2)
// โจทย์ 3:
// รวมค่าคะแนนของนักเรียนทั้งหมด โดยรวมเฉพาะนักเรียนที่สอบผ่าน (คะแนนมากกว่าหรือเท่ากับ 50)
const students = [
  { name: 'Ann', score: 45 },
  { name: 'Ben', score: 80 },
  { name: 'Cara', score: 60 },
  { name: 'Dan', score: 30 }
];
let b3 = students.filter((x) => x.score >= 50).reduce((x,y) => x + y.score,x=0)
console.log(b3)