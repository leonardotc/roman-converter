import RomanNumerals from './RomanNumerals'

test('converts arabic into roman', () => {
  expect(RomanNumerals.toRoman(1000)).toBe('M')
  expect(RomanNumerals.toRoman(39)).toBe('XXXIX')
  expect(RomanNumerals.toRoman(246)).toBe('CCXLVI')
  expect(RomanNumerals.toRoman(789)).toBe('DCCLXXXIX')
  expect(RomanNumerals.toRoman(2421)).toBe('MMCDXXI')
  expect(RomanNumerals.toRoman(0)).toBe('')
})

test('converts roman into arabic', () => {
  expect(RomanNumerals.fromRoman('M')).toBe(1000)
  expect(RomanNumerals.fromRoman('XXXIX')).toBe(39)
  expect(RomanNumerals.fromRoman('CCXLVI')).toBe(246)
  expect(RomanNumerals.fromRoman('DCCLXXXIX')).toBe(789)
  expect(RomanNumerals.fromRoman('MMCDXXI')).toBe(2421)
  expect(RomanNumerals.fromRoman('')).toBe(0)
})
