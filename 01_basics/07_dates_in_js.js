let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));       // object

let myCreatedDate = new Date(2024, 0, 24)
console.log(myCreatedDate.toDateString());        //     Wed Jan 24 2024


let myCreatedDate2 = new Date(2024, 0, 24, 5, 30)
console.log(myCreatedDate2.toLocaleString());         //   1/24/2024, 5:30:00 AM


let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



