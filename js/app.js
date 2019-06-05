// template literals 

const name = 'john';
const age = 30; 
const job = 'web developer';
const city = 'Miami';
let html; 

html = '<ul><li>Name:  ' + name + '</li><li>Age:  ' + age + ' </li><li>Job: ' + job + '</li><li>Name: ' + city + '</li></ul>';

html = `
        <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        </ul>
        `;

document.body.innerHTML = html; 

const numbers = [43,56,33,100,44,36,5];

let val; 

// val = numbers.sort(function(x, y){
//   return x - y;
// });

function under50(num){
  return num < 50;
};

val = numbers.find(under50);

console.log(numbers);
console.log(val);

const person = {
  firstName: 'Steve'
};

val = person; 

console.log(val);

const today = new Date(); 

console.log(today);

val = today; 

console.log(val);

