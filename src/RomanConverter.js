import _ from 'lodash'

const singleDigit = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

const digits = {
  M: { value: 1000, isSingleDigit: true },
  CM: { value: 900, isSingleDigit: false },
  D: { value: 500, isSingleDigit: true },
  CD: { value: 400, isSingleDigit: false },
  C: { value: 100, isSingleDigit: true },
  XC: { value: 90, isSingleDigit: false },
  L: { value: 50, isSingleDigit: true },
  XL: { value: 40, isSingleDigit: false },
  X: { value: 10, isSingleDigit: true },
  IX: { value: 9, isSingleDigit: false },
  V: { value: 5, isSingleDigit: true },
  IV: { value: 4, isSingleDigit: false },
  I: { value: 1, isSingleDigit: true }
}

class RomanConverter {
  static fromRoman (romanStr) {
    let arabic = 0
    const roman = romanStr.split('')
    for (let i = 0; i < roman.length; i++) {
      const next = roman[i + 1]
      const arabicDigit = singleDigit[roman[i]]
      arabic += !next || singleDigit[next] <= arabicDigit ? arabicDigit : arabicDigit * -1
    }
    return arabic
  }

  static isNumber (input) {
    return _.isNumber(input)
  }

  static isRomanNumber (input) {
    const validDigits = _.keys(singleDigit)
    return _.filter(input, letter => _.includes(validDigits, letter))
  }

  static toRoman (arabicStr) {
    let romanStr = ''
    let arabic = parseInt(arabicStr)

    _.each(digits, (algarism, romanLetters) => {
      if (algarism.isSingleDigit) {
        const digitCount = Math.floor(arabic / algarism.value)
        arabic = arabic % algarism.value
        romanStr += romanLetters.repeat(digitCount)
      } else if (arabic >= algarism.value) {
        arabic -= algarism.value
        romanStr += romanLetters
      }
    })

    return romanStr
  }
}

export default RomanConverter
