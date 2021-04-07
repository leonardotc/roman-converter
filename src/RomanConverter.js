import _ from 'lodash'

const doubleDigit = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4
}

const singleDigit = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 10
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
    fromRoman(romanStr) {
        // TODO
    }
    static toRoman(arabicStr) {
        let romanStr = ""
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