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
