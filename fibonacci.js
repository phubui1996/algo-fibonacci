function fibonacci(num) {
  let previousNum = 0;
  let nextNum = 1
  let result = 0;
  for(let i = 1; i < num; i++){
    result = previousNum + nextNum;
    //console.log(` result = ${result}`);
    previousNum = nextNum;
    nextNum = result;
    //console.log(`Previous: ${previousNum}, Next: ${nextNum}`);
  }
  return result;
}

module.exports = fibonacci;

console.log(fibonacci(3)); // 2
console.log(fibonacci(7)); // 13
