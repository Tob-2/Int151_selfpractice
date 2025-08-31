// โจทย์ 1:
// มีอาเรย์ของตัวเลข [1, 2, 3, 4, 5]
// ให้ใช้ .map() เพื่อเพิ่มค่าทุกตัวในอาเรย์ให้มากขึ้น 1
let a = [1,2,3,4,5];
let b = a.map((x) => x+1);
console.log(b)
// โจทย์ 2:
// ให้แปลงอาเรย์ของชื่อคน ให้กลายเป็นอ็อบเจกต์ที่มีชื่อและความยาวของชื่อ 
let a2 = ["alice","bob","charlie"]
let b2 = a2.map((x) => `${x}:length${x.length}`)
console.log(b2)
// โจทย์ 3:
// ให้แปลงอาเรย์ของสินค้าเป็นอาเรย์ใหม่ที่มีเฉพาะชื่อสินค้าและราคารวมหลังจากลดราคาแล้ว (discount)
const products = [
  { name: "Laptop", price: 1000, discount: 0.1 },
  { name: "Phone", price: 500, discount: 0.05 },
  { name: "Tablet", price: 800, discount: 0.15 }
];
let b3 = products.map((x) => x.price * x.discount)
console.log(b3)