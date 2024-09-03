// pseudocódigo:
// int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// transformando para código:
const INDICE = 12
let SOMA = 0, K = 1

while (K < INDICE) {
  K = K + 1
  SOMA = SOMA + K
}

console.log(SOMA)
// O valor final da variável SOMA ao término das iterações será 77.