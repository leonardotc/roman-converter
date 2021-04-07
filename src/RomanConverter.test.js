import { render, screen } from '@testing-library/react'
import RomanConverter from './RomanConverter'

test('converts arabic into roman', () => {
  expect(RomanConverter.toRoman(1000)).toBe('M')
  expect(RomanConverter.toRoman(39)).toBe('XXXIX')
  expect(RomanConverter.toRoman(246)).toBe('CCXLVI')
  expect(RomanConverter.toRoman(789)).toBe('DCCLXXXIX')
  expect(RomanConverter.toRoman(2421)).toBe('MMCDXXI')
  expect(RomanConverter.toRoman(0)).toBe('')
})

test('converts roman into arabic', () => {
  expect(RomanConverter.fromRoman('M')).toBe(1000)
  expect(RomanConverter.fromRoman('XXXIX')).toBe(39)
  expect(RomanConverter.fromRoman('CCXLVI')).toBe(246)
  expect(RomanConverter.fromRoman('DCCLXXXIX')).toBe(789)
  expect(RomanConverter.fromRoman('MMCDXXI')).toBe(2421)
  expect(RomanConverter.fromRoman('')).toBe(0)
})
