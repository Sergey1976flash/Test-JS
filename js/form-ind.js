// const str = `hello`;
// const num = 234;
// const bool = true;
// const arr = [];
// const obj = {};

// console.log(typeof num);

// //TODO: № 1 на if...else ===============================================
// // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 10;
// if (a === 10) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }

//TODO: № 6 на for ===================================
//За допомогою циклу for додайте всі парні числа від min до max

// const min = 0;
// const max = 10;
// let total = 0;
// const number = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
// for (let i = min; i < max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     total += i;
//   }
// }
// console.log(total);

//TODO: № 1  ============================================================
// //Напиши функцію findSmallerNumber(numbers)
// //яка шукає найменше число в масиві.
// //Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallerNumber(array) {
//   let min = array[0];
//   for (const item of array) {
//     // console.log(item);
//     if (min > item) {
//       min = item;
//     }
//   }
//   return min;
// }
// console.log(findSmallerNumber(numbers));
// // findSmallerNumber(numbers)

//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// создать функцию  создать новый массив пуш в массив и перебор

function sunnSud(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    newArray.push(array[i] + array[i + 1]);
  }
  return newArray;
}
console.log(sunnSud(someArr));

//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
