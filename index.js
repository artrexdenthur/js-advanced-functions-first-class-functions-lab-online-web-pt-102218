// Code your solution in this file!

const returnFirstTwoDrivers = function (dArr) {
  return dArr.slice(0, 2)
}

const returnLastTwoDrivers = function (dArr) {
  return dArr.slice(-2)
};

let blue = 2;

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(m) {
  return function (fInt) {return fInt * m };
}

function fareDoubler(fOrig) {
  return createFareMultiplier(2)(fOrig);
}

function fareTripler(fOrig) {
  const tripler = createFareMultiplier(3);
  return tripler(fOrig);
}

function fetchSpecifiedDrivers(dArr, func) {
  return func(dArr);
}