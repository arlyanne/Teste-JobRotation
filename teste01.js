function verificaFibonacci(num) {
    let fib = [0, 1];
    let i = 2;
  
    while (fib[i - 1] + fib[i - 2] <= num) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }
  
    if (fib.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  

  console.log(verificaFibonacci(21));
  console.log(verificaFibonacci(22)); 