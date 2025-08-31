// โจทย์ 1:
// จากอาเรย์ของชื่อ ให้กรองเฉพาะชื่อที่ขึ้นต้นด้วยตัว "A"
const names = ["Alice", "Bob", "Amy", "Charlie", "Ann"];
let a = names.filter((x) => x.includes("A"))
console.log(a)
// โจทย์ 5:
// จากอาเรย์ของสินค้าที่มีสถานะสต๊อก ให้กรองเฉพาะสินค้าที่ "มีในสต๊อก" และ "ราคาต่ำกว่า 1000"
const products = [
  { name: "Laptop", price: 2500, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 800, inStock: false },
  { name: "USB Cable", price: 150, inStock: true }
];
let a2 = products.filter((x) => {return x.inStock === true && x.price < 1000})
console.log(a2)