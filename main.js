import './src/style.css';
import './src/Footer';

document.querySelector('#app').innerHTML = `
`;

// This is a single line comment
/* alert('Hello, World!'); */
// console.log('Hello, World!');
// Capture the original console.log function
/* /////////////////////////////////////////////// */
// Footer year
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
// year.setAttribute('daretime', currentYear.toString());
year.setAttribute('datetime', currentYear.toString());
year.textContent = currentYear.toString();
/* /////////////////////////////////////////////////// */
