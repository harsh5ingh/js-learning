// Dates
/*
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getDate()); // isse hame date pta chalti h konsa din h like '26'
console.log(myDate.getDay()); // isse hame week ka konsa no. h wo pta chalta h like Tues hua to 2nd day of this week
console.log(myDate.getFullYear()); // isse hame konsa year chal rha woh pta chalta hai
console.log(myDate.toLocaleString()); // isme DD/MM/YYYY Hr:Mn:00 AM/PM k format m show krta hai
console.log(myDate.toDateString()); // isme Day, Month, Date, Year ke format m show hota hai

console.log(typeof myDate); // isse hame DateTime ka type pta chalta hai jo ki Object hai
/*
let myCreatedDate = new Date(2024, 0, 26) // month JS m 0 start hote h like 0 -> Jan.... 1 -> Feb
let myCreatedDate = new Date(2025, 7, 27, 1, 47, 35)
let myCreatedDate = new Date("08-27-2025")
console.log(myCreatedDate.toLocaleString())
*/
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let NewDate = new Date()
console.log(NewDate.getMonth() + 1 ); // isse hume month pta chalta h & agar hm +1 dete h to original date pta chalta hai like 0 stands for Jan wahi agar hm 0+1 kr de to easily samajh aayega 1 -> Jan
console.log(NewDate.getDay());

`${NewDate.getDay()} and the time `

NewDate.toLocaleString('default', {
    weekday: "long",

})
















