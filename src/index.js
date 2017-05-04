// By declaring this import, Webpack will automatically bundle this CSS
//import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// The following line makes the browser stop running and, in the Developer Tools, we can see the original code writen
// by us and not the transpiled code
debugger;
// Using backticks tells Javascript to parse the string contents to resolve variable names by values
console.log(`I would pay ${courseValue} for this awesome course!`);
