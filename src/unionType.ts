const kgToLbs = (weight: number | string): number => {
  if (typeof weight === 'number') return weight * 2.2;
  return parseInt(weight) * 2.2;
};

console.log(kgToLbs(10));
console.log(kgToLbs('10'));
