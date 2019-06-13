// template literals 

// const name = 'john';
// const age = 30; 
// const job = 'web developer';
// const city = 'Miami';
// let html; 

// html = '<ul><li>Name:  ' + name + '</li><li>Age:  ' + age + ' </li><li>Job: ' + job + '</li><li>Name: ' + city + '</li></ul>';

// html = `
//         <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         </ul>
//         `;

// document.body.innerHTML = html; 

// const numbers = [43,56,33,100,44,36,5];

// let val; 

// // val = numbers.sort(function(x, y){
// //   return x - y;
// // });

// function under50(num){
//   return num < 50;
// };

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

// const person = {
//   firstName: 'Steve'
// };

// val = person; 

// console.log(val);

// const today = new Date(); 

// console.log(today);

// val = today; 

// console.log(val);

// for(let i = 0; i < 10; i++){
//   if(i == 2){
//     console.log('who does #2 work for?')
//     continue;
//   }

//   if(i === 5){
//     break;
//   }

//   console.log('number ' + i); 

// }

// while loop 

// let i = 0; 

// while(i < 10){
//   console.log('number ' + i);
//   i++;
// }

// do while 

// let abd = 0; 

// do {
//   console.log('number ' + abd);
//   abd++;
// }

// while(abd < 10);

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// console.log(cars);

// const users = [
//   {butts: 1, name: 'John'},
//   {butts: 2, name: 'Sara'},
//   {butts: 3, name: 'Karen'},
// ];

// const ids = users.map(function(uass){
//   return uass.butts
  
// });

// console.log(ids);

const user = {
  firstName: 'john',
  ass: 'doe',
  age: 40
}

for(let buttcheeks in user){
  console.log(`${buttcheeks} : ${user[buttcheeks]}`);
}
