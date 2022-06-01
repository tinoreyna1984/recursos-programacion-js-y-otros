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
