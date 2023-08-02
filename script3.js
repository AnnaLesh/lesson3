//1 задание
function degree(number) {
    return number * number * number
}
console.log(degree(2) + degree(3))

//2 задание
function calculateSalary(input) {
    if (isNaN(input)) {
      alert("Значение задано неверно")
    }else{
        let salary = input - (input * 0.13)
        alert("Размер заработной платы за вычетом налогов равен " + salary)
    }
    
  }
let userInput = parseInt(prompt("Введите число:"));
calculateSalary(userInput);
  
//3 задание
function findMax(a, b, c) {
    let max = a
    if (b > max) {
      max = b
    }
    if (c > max) {
      max = c
    }
    return max
  }
  
  let num1 = Number(prompt("Введите первое число:"))
  let num2 = Number(prompt("Введите второе число:"))
  let num3 = Number(prompt("Введите третье число:"))
  
  let maxNumber = findMax(num1, num2, num3)
alert("Максимальное число: " + maxNumber)

//4 задание
function sum(a, b) {
    return a + b
  }
  function difference(a, b) {
    if (a > b) {
      return a - b
    } else if (a < b) {
      return b - a
    } else {
      return 0
    }
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
 
first1 = prompt('Введите первое число:')
first2 = prompt('Введите второе число:')  
console.log(sum(first1,first2))
console.log(difference(first1, first2))
console.log(multiply(first1, first2))
console.log(divide(first1, first2))
