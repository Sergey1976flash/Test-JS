// function calculateAverage(...args) {

//     for (const arg of args) {
//         if (typeof arg !== 'number') {
//             throw new Error('Усі аргументи мають бути числами');
//         }
//     }

//     const sum = args.reduce((total, num) => total + num, 0);

//     const average = sum / args.length;

//     return average;
// }

// console.log(calculateAverage(5, 10, 15));

// function findSmallerNumber(numbers) {

//     if (!Array.isArray(numbers)) {
//         throw new Error('Вхідний параметр повинен бути масивом');
//     }

//     if (numbers.length === 0) {
//         throw new Error('Масив не може бути пустим');
//     }

//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }

//     return smallestNumber;
// }
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallerNumber(numbers));

// function calculateSalarySum(salaries) {
//     if (Object.keys(salaries).length === 0) {
//         return 0;
//     }

//     return Object.values(salaries).reduce((total, salary) => total + salary, 0);
// }

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// const sum = calculateSalarySum(salaries);
// console.log(sum);

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// atTheOldToad.addPotion('Text');
// console.log(atTheOldToad.getPotions());

// const defaultSettings = {
//   theme: "dark",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 5,
//   timePerQuestion: 60
// };

// const defaultSettings = {
//   theme: "dark",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 5,
//   timePerQuestion: 60
// };

// const overrideSettings = {
//   theme: "light",
//   public: false,
//   withPassword: true,
//   minNumberOfQuestions: 10
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings
// };

// console.log(finalSettings);

// const filterArray = (numbers, value) => {
//   const filteredArray = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   });

//   return filteredArray;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // Виведе: [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // Виведе: [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // Виведе: []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // Виведе: [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // Виведе: [24, 41, 76]



// 
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime); // Вывод общего игрового времени
// console.log(averagePlayTime); // Вывод среднего игрового времени

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  // Расчет среднего времени на одну игру для каждого игрока
  const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
  // Добавление среднего времени на одну игру игрока к общей сумме
  acc += averagePlaytimePerGame;
  return acc;
}, 0);

console.log(totalAveragePlaytimePerGame); // Вывод общей суммы среднего времени на одну игру