import { css } from '@emotion/react';

const diningIconSVG = css`
  background-image: url('/images/dining.svg');
  width: 200px;
  height: 200px;
`;

const playgroundIconSVG = css`
  background-image: url('/images/playground.svg');
  width: 200px;
  height: 200px;
`;

export function getRatingColor(rating) {
  const colors = [
    '#ff0000',
    '#fc3800',
    '#f86f00',
    '#f5a500',
    '#f2d900',
    '#d1ee00',
    '#9aeb00',
    '#64e800',
    '#2fe400',
    '#04db08',
  ];
  return colors[rating - 1];
}

export function getIconDisplayFromCriteria(criteria) {
  let icon = '';

  if (criteria === 'safety') {
    icon = <i className="bi bi-shield-fill-check" />;
  } else if (criteria === 'parks') {
    icon = <i className="bi bi-tree-fill" />;
  } else if (criteria === 'noise_level') {
    icon = <i className="bi bi-megaphone-fill" />;
  } else if (criteria === 'shopping') {
    icon = <i className="bi bi-cart-fill" />;
  } else if (criteria === 'entertainment') {
    icon = <i className="bi bi-camera-reels-fill" />;
  } else if (criteria === 'dining') {
    icon = <i css={diningIconSVG} />;
  } else if (criteria === 'kids_friendly') {
    icon = <i css={playgroundIconSVG} />;
  } else if (criteria === 'public_transport') {
    icon = <i className="bi bi-stoplights-fill" />;
  }
  return icon;
}
