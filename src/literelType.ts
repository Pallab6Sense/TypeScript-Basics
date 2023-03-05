let age: 23 | '22' = '22'; //!Age variable will only accept 23 or '22' nothing else
console.log(age);

const addNumber = (
  firstNumber: string | number,
  secondNumber: string | number,
  type: 'asNumber' | 'asString'
): string | number => {
  if (type === 'asNumber') return +firstNumber + +secondNumber;
  else return firstNumber.toString() + secondNumber.toString();
};

console.log(addNumber(1, 2, 'asNumber'));
console.log(addNumber('Pallab', ' Majumdar', 'asString'));
