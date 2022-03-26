const palabra = 'reconocer';

const palindromo = (palabra) => {
  arrInvPalabra = palabra.split("");
  invPalabra = arrInvPalabra.reverse().join("");
  if(palabra === invPalabra){
    console.log(palabra + ' es un palindromo.');
    return true;
  }
  else{
    console.log(palabra + ' no es un palindromo.');
    return false;
  }
}

palindromo(palabra); // reconocer es un palindromo.

