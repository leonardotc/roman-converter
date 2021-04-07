import { render, screen } from '@testing-library/react';
import RomanConverter from './RomanConverter';

test('converts arabic into roman', () => {
  let result = RomanConverter.toRoman(1000)
  expect(result).toBe(1000);
});
