function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var cont = 0;
  for (let i=1; i<=n; i++) {
    cont = cont + i;
  } return cont;
}

module.exports = sumarHastaN;
