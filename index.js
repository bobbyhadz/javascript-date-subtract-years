// EXAMPLE 1 - Subtract Years from a Date in JavaScript

function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);

  return date;
}

// ✅ Subtract 1 year from the current date
const result1 = subtractYears(new Date(), 1);
console.log(result1); // 👉️ 2022-07-28T15:59:55.235Z

// ✅ Subtract 2 years from a different date
const date = new Date('2024-06-15T17:37:59.000Z');
const result2 = subtractYears(date, 2);
console.log(result2); // 👉️ 2022-06-15T17:37:59.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Subtract Years from a Date without mutation

// function subtractYears(date, years) {
//   const dateCopy = new Date(date);

//   dateCopy.setFullYear(dateCopy.getFullYear() - years);

//   return dateCopy;
// }

// const date = new Date('2024-06-15T17:37:59.000Z');

// const result = subtractYears(date, 2);
// console.log(result); // 👉️ 2022-06-15T17:37:59.000Z

// console.log(date); // 👉️ 2024-06-15T17:37:59.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Subtract Years from a Date using date-fns

// import {subYears} from 'date-fns';

// const date = new Date('2024-06-15T17:37:59.000Z');

// const result1 = subYears(date, 2);
// console.log(result1); // 👉️ 2022-06-15T17:37:59.000Z

// const result2 = subYears(date, 5);
// console.log(result2); // 👉️ 2019-06-15T17:37:59.000Z

// console.log(date); // 👉️ 2024-06-15T17:37:59.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Subtract Years from a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-06-15T17:37:59.000Z');

// const result1 = moment(date).subtract(2, 'years');
// console.log(result1); // 👉️ 2022-06-15T17:37:59.000Z

// const result2 = moment(date).subtract(5, 'years');
// console.log(result2); // 👉️ 2019-06-15T17:37:59.000Z

// console.log(date); // 👉️ 2024-06-15T17:37:59.000Z
