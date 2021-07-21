export function getRatingColor(rating: number) {
  const colors: string[] = [
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
