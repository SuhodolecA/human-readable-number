const n0_9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
const n10_19 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
const n20_90 = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
const n100_900 = { 100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred' };

module.exports = function toReadable(number) {
    let strNumb = String(number);
    if (strNumb.length === 1) {
        return n0_9[number];
    } else if (strNumb.length === 2) {
        if (number >= 20) {
            if (strNumb[1] !== '0') {
                return n20_90[+(strNumb[0] + '0')] + ' ' + n0_9[+strNumb[1]];
            } else {
                return n20_90[+(strNumb[0] + '0')]
            }
        }
        return n10_19[number];
    } else if (strNumb.length === 3) {
        if (strNumb[1] === '0' && strNumb[2] === '0') {
            return n100_900[+(strNumb[0] + '00')];
        } else if (strNumb[1] === '0') {
            return n100_900[+(strNumb[0] + '00')] + ' ' + n0_9[+strNumb[2]];
        } else if (+(strNumb[1] + strNumb[2]) < 20 && +(strNumb[1] + strNumb[2]) > 9) {
            return n100_900[+(strNumb[0] + '00')] + ' ' + n10_19[+(strNumb[1] + strNumb[2])];
        } else if (strNumb[2] == '0') {
            return n100_900[+(strNumb[0] + '00')] + ' ' + n20_90[+strNumb[1] + '0'];
        }
        return n100_900[+(strNumb[0] + '00')] + ' ' + n20_90[+strNumb[1] + '0'] + ' ' + n0_9[+strNumb[2]];
    }
}



