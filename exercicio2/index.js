function checkLetterA(string) {
  let stringUpperCase = string.toUpperCase()

  stringUpperCase = stringUpperCase.replace(/[ÀÁÂÃÄÅ]/, "A")
  
  let quantity = 0

  for (let i = 0; i < stringUpperCase.length; i++) {
    if (stringUpperCase[i] === 'a' || stringUpperCase[i] === 'A') {
      // console.log(`A letra A foi encontrada na posição: ${i}`)
      quantity++
    }
  }
  
  if (quantity > 0) {
    console.log(`A letra A foi encontrada ${quantity} vez(es).`)
  } else {
    console.log('A letra A não foi encontrada')
  }
}

checkLetterA('Target Sistemas')
checkLetterA('n possuo')