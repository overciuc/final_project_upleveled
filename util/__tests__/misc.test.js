/**
 * @jest-environment jsdom
 */
import { getIconDisplayFromCriteria, getRatingColor } from '../misc';

test('shows the color for a pin from an array based on a rating given', () => {
  expect(getRatingColor(1)).toBe('#ff0000');
  expect(getRatingColor(2)).toBe('#fc3800');
  expect(getRatingColor(3)).toBe('#f86f00');
  expect(getRatingColor(4)).toBe('#f5a500');
  expect(getRatingColor(5)).toBe('#f2d900');
  expect(getRatingColor(6)).toBe('#d1ee00');
  expect(getRatingColor(7)).toBe('#9aeb00');
  expect(getRatingColor(8)).toBe('#64e800');
  expect(getRatingColor(9)).toBe('#2fe400');
  expect(getRatingColor(10)).toBe('#04db08');
});

test('show a different icon for different criterias', () => {
  expect(getIconDisplayFromCriteria('safety')).toMatchObject(
    <i className="bi bi-shield-fill-check" />,
  );
  expect(getIconDisplayFromCriteria('parks')).toMatchObject(
    <i className="bi bi-tree-fill" />,
  );
  expect(getIconDisplayFromCriteria('noise_level')).toMatchObject(
    <i className="bi bi-megaphone-fill" />,
  );
  expect(getIconDisplayFromCriteria('shopping')).toMatchObject(
    <i className="bi bi-cart-fill" />,
  );
  expect(getIconDisplayFromCriteria('entertainment')).toMatchObject(
    <i className="bi bi-camera-reels-fill" />,
  );

  expect(getIconDisplayFromCriteria('public_transport')).toMatchObject(
    <i className="bi bi-stoplights-fill" />,
  );
});
