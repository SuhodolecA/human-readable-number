// const n0_9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
// const n10_19 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
// const n20_90 = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
// const n100_900 = { 100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred' };

// module.exports = function toReadable(number) {
//     let strNum = number.toString();
//     let length = strNum.length;
//     if (length === 1) {
//         return n0_9[number];
//     } else if (length === 2) {
//         if (number >= 20) {
//             if (strNum[1] !== '0') {
//                 let numb = Number(`${strNum[0]}0`);
//                 return n20_90[numb] + ' ' + n0_9[+strNum[1]];
//             } else {
//                 return n20_90[+(strNum[0] + '0')]
//             }
//         }
//         return n10_19[number];
//     } else if (length === 3) {
//         if (strNum[1] === '0' && strNum[2] === '0') {
//             return n100_900[+(strNum[0] + '00')];
//         } else if (strNum[1] === '0') {
//             return n100_900[+(strNum[0] + '00')] + ' ' + n0_9[+strNum[2]];
//         } else if (+(strNum[1] + strNum[2]) < 20 && +(strNum[1] + strNum[2]) > 9) {
//             return n100_900[+(strNum[0] + '00')] + ' ' + n10_19[+(strNum[1] + strNum[2])];
//         } else if (strNum[2] == '0') {
//             return n100_900[+(strNum[0] + '00')] + ' ' + n20_90[+strNum[1] + '0'];
//         }
//         return n100_900[+(strNum[0] + '00')] + ' ' + n20_90[+strNum[1] + '0'] + ' ' + n0_9[+strNum[2]];
//     }
// };

// second solution
const numbers = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
  20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
};

module.exports = function toReadable(number) {
  const numToArray = number.toString().split('');
  const length = numToArray.length;
  const hundreds = numToArray[0];
  const dozens = `${numToArray[1]}0`;
  const units = numToArray[2];
  const dozensPlusUnits = `${numToArray[1]}${numToArray[2]}`;
  if (length === 1) {
    return numbers[hundreds];
  } else if (length === 2) {
    if (numToArray[1] === '0') {
      return numbers[numToArray.join('')];
    } else {
      let dozens = `${numToArray[0]}0`;
      let units = numToArray[1];
      let dozensPlusUnits = `${numToArray[0]}${numToArray[1]}`
      if (parseInt(dozens) >= 20) {
        return `${numbers[dozens]} ${numbers[units]}`;
      } else {
        return `${numbers[dozensPlusUnits]}`;
      }
    }
  } else if (length === 3) {
    if (numToArray[1] === '0' && numToArray[2] === '0') {
      return `${numbers[hundreds]} hundred`;
    } else if (numToArray[1] === '0') {
      return `${numbers[hundreds]} hundred ${numbers[units]}`;
    } else if (numToArray[2] === '0') {
      return `${numbers[hundreds]} hundred ${numbers[dozens]}`;
    } else {
      if (parseInt(dozens) >= 20) {
        return `${numbers[hundreds]} hundred ${numbers[dozens]} ${numbers[units]}`;
      } else {
        return `${numbers[hundreds]} hundred ${numbers[dozensPlusUnits]}`;
      }
    }
  }
};



