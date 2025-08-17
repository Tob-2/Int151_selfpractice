let book1 = {
    isbn: 123456789,
    title: "JavaScript"
}
let book2 = {
    isbn: 123456789,
    title: "JavaScript"
}
function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if(keys1.length !== keys2.length){
        return false }
    for(let key of keys1) {
        if(object1[key] !== object2[key]) {
            return false}}
    return true}

console.log("shallow equality: " + shallowEquality(book1, book2))
// ฟังก์ชั่นนี้เช็คว่าobjectสองตัวเท่ากันและเหมือนกันหรือป่าวเช็คเสร้จก็ดึงkeyมาเก็บไว้ในตัวแปรที่สร้างไว้ก่อน 
// step1เช็คว่าจำนวน keyของทั้ง 2 objectเท่ากันมั้ย ถ้าไม่เท่ากันจะ return falseแต่ถ้าเท่าก็จะไปเช็คstepต่อไป
// หลังจากเช็คจำนวน keyแล้ว stepถัดไปคือloop ดูหาว่าคใน object ทั้งสองตัว เหมือนกันมั้ย ถ้าไม่เหมือนจะ return false แต่ถ้าเหมือนก็จะทำในdtepต่อไปหลังจากที่เช็คว่าจำนวน keyเท่ากันแล้วก้จะloopออกมา ถ้าloopเท่ากันก็จะ return true

