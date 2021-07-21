/**
 * @jest-environment jsdom
 */
import { getRatingColor } from '../helpers';

test('shows the color for a pin from an array based on a rating given', () => {
  expect(getRatingColor(3)).toBe('#f86f00');
});
