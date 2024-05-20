function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  total = 1;
  for (i = b; i >= a; i--) {
    total = total * i;
  } return Math.abs(total);
    
}

module.exports = productoEntreNúmeros;