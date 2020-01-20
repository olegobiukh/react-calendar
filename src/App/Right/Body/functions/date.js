const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var getMonthDays = function(month, year) {
  return new Date(year, month + 1, 0).getDate();
};

const d = new Date();
const currentDay = d.getDate(); // current day 18
const currentMonth = monthNames[d.getMonth()];
const currentNumberMonth = d.getMonth();
const currentYear = d.getFullYear();
// prev month data
const getPrevMonth = (monthNumber) => (monthNumber === 0 ? 11 : monthNumber - 1);
const getPrevMonthYear = (monthNumber, year) => monthNumber === 0 ? year - 1 : year;
// next month data
const getNextMonth = (monthNumber) => monthNumber === 11 ? 0 : monthNumber + 1;
const getNextMonthYear = (monthNumber, year) => monthNumber === 11 ? year + 1 : year;

const getDaysInMonth = (month, year) => getMonthDays(month, year); // 1, 2020

// get week day
const getNumberOfWeekDay = (year, month, day) =>
  new Date(year, month, day).getDay();

// get days of a previous month
const getDaysOfPrevMonth = (number, arrayLength) => {
  const result = [];
  for (let i = number; i > number - arrayLength; i--) {
    result.unshift(i);
  }
  return result;
};

// get days of a next month
const getDaysOfNextMonth = arraylength => {
  const result = [];
  for (let i = 1; i <= arraylength; i++) {
    result.push(i);
  }
  return result;
};

// getPrevMonthData
const getPrevMonthData = (monthNumber, year) => {
  const prevMonth = getPrevMonth(monthNumber);
  const prevMonthYear = getPrevMonthYear(monthNumber, year);
  
  const startingDayOfMonth = getNumberOfWeekDay(year, monthNumber, 1);
  const lastDayofPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);

  const daysOfPrevMonth = getDaysOfPrevMonth(
    lastDayofPrevMonth,
    startingDayOfMonth
  );

  return {
    prevMonth,
    prevMonthYear,
    daysOfPrevMonth
  };
};

// getNextMonthData
const getNextMonthData = (monthNumber, year, lastMonthDay) => {
    const nextMonth = getNextMonth(monthNumber);
    const nextMonthYear = getNextMonthYear(monthNumber, year);

  const lastWeekDayOfMonth = getNumberOfWeekDay(
    year,
    monthNumber,
    lastMonthDay
  );

  const arrayLength = 6 - lastWeekDayOfMonth;

  return {
    daysOfNextMonth: getDaysOfNextMonth(arrayLength),
    nextMonth,
    nextMonthYear
  };
};

export {
  currentDay,
  currentMonth,
  currentYear,
  getMonthDays,
  getDaysInMonth,
  getNumberOfWeekDay,
  currentNumberMonth,
  getDaysOfPrevMonth,
  getPrevMonthData,
  getNextMonthData,
  getNextMonth,
  getNextMonthYear,
  getPrevMonth,
  getPrevMonthYear,
};
