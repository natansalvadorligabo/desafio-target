function fibonacci(n) {
  // casos-base:
  if (n === 0) return 0
  if (n === 1) return 1

  // caso recursivo:
  let prev = 0
  let current = 1
  let next

  for (let i = 2; i <= n; i++) {
    next = prev + current
    prev = current
    current = next
  }

  return current
}

function isFibonacci(number) {
  // caso-base:
  if (number < 0) {
    return false
  }

  // caso recursivo:
  let fiboNumber = 0
  for (let i = 0; fiboNumber < number; i++) {
    fiboNumber = fibonacci(i)
  }

  return (fiboNumber === number)
}

console.log(isFibonacci(0))
console.log(isFibonacci(1))
console.log(isFibonacci(2))
console.log(isFibonacci(3))
console.log(isFibonacci(4)) // não pertence ao fibonacci
console.log(isFibonacci(5))
console.log(isFibonacci(34))