// การเขียนคำอธิบายในโปรแกรมภาษา JavaScript ใช้เครื่องหมาย // หรือ /**/
console.log('Hello World')

// var ตัวแปรที่สามารถเปลี่ยนค่าได้
// let ตัวแปรที่สามารถเปลี่ยนค่าได้
// const ตัวแปรที่ไม่สามารถเปลี่ยนค่าได้

// ปัญหาของ JavaScript ที่เกิดจากการเปลี่ยนประเภทของตัวแปร
let j: number = 10
// j = "JavaScript"
let k: number = Math.pow(j, 2) // NaN
console.log(j)
console.log(k) // NaN

// อีกตัวอย่าง
let a = "10"
let z = a + 10 // 1010
console.log(z)