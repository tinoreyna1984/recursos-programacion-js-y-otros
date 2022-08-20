// obtener los cuatro mayores valores de un array y devolver la suma de los mismos

function LargestFour(arr) {
  // code goes here:
  let largestFourArray = [],
    i = 0;
  arr.reverse();
  while (i < 4) {
    largestFourArray.push(arr[i]);
    i++;
  }
  return largestFourArray.reduce((p, c) => p + c);
}

console.log(LargestFour([1, 2, 3, 4, 5, 6]));

/** Arbol binario */

function TreeConstructor(strArr) {
  // code goes here
  let store = [];
  let re;
  for (let i = 0; i < strArr.length; i++) {
    re = eval("list" + strArr[i]);
    if (typeof store[re[1]] === "undefined") store[re[1]] = 0;
    if (++store[re[1]] > 2) return "false";
  }
  function list(a, b) {
    return [a, b];
  }
  return "true";
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));


//

const arreglo = [2,4,9,20,42];

// for tradicional
for(let i = 0; i < arreglo.length; i++){
  console.log(`Valor atual: ${arreglo[i]}`);
}

// for in
for(let i in arreglo){
  console.log(`Valor atual: ${arreglo[i]}`);
}

// for of
for(let arr of arreglo){
  console.log(`Valor atual: ${arr}`);
}

// forEach
arreglo.forEach( arr => console.log(`Valor atual: ${arr}`))


//-------------------

const MODE_DATE_TIME = 0;
const MODE_DATE_ONLY = 1;

const currDate = new Date();

const formatDateTime = (currDate, mode) => {
  let date = currDate.getDate();
  let month = currDate.getMonth() + 1;
  let year = currDate.getFullYear();
  let hours = currDate.getHours();
  let minutes = currDate.getMinutes();
  let seconds = currDate.getSeconds();
  switch (mode) {
    case MODE_DATE_TIME:
      return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    case MODE_DATE_ONLY:
      return `${date}/${month}/${year}`;
    default:
      return `${date}/${month}/${year}`;
  }
}

console.log(formatDateTime(currDate, 1));

//--------------------

const numeros = 10;

const sumarDos = (numeros) => (numeros + 2);

console.log(sumarDos(numeros)); //

//--------------------------------

var x = 23;
( function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();

//-------------------------------

var obj1 = { name: 'Tinkin', color: 'blue', logo: 'logo.png' };

/* var list = [];

for(var prop in obj1){
  list.push(obj1[prop]);
}

console.log(list); */ // [ 'Tinkin', 'blue', 'logo.png' ]

var list = Object.keys(obj1).map(key => obj1[key]);
console.log(list)

//----------------------------------

const numbers = [2, 4, 9, 12, 22];

for(let i = 0; i <= 4; i++){
  setTimeout(
    () => {
      console.log(++numbers[i]);
    }
    , 1000);
}

//--------------------------------

function find_max(nums) {
	let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
		for (let num of nums) {
			if (num > max_num) {
				max_num = num;
			}
		}
	return max_num;
}

const nums = [5,4,10,2,6];
console.log(find_max(nums));
//--------------------------------

console.log(
  (()=> {
  console.log(12)
  return 5
  })())

//------------------------

var text = 'outside';

function logIt(){
  console.log(text);
  var text = 'inside';
}
logIt();

//----------------------------------

const arr = ['one', 'two', 'three'];
//const withCommaAndSpace = arr.join(', ');
//console.log(withCommaAndSpace);

const arrayToStringTags = (arr) => {
  let withCommaAndSpace = arr.join(', ');
  return withCommaAndSpace;
}

console.log(arrayToStringTags(arr));



