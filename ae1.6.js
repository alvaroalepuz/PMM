var numero = prompt ('Introduce un número entero','');

var resultado = parImpar(numero);
console.log ("El número "+numero + resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return " es número par";
  }
  else {
    return " no es número par";
  }
}