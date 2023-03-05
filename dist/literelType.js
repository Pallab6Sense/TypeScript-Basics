"use strict";
let age = '22';
console.log(age);
const addNumber = (firstNumber, secondNumber, type) => {
    if (type === 'asNumber')
        return +firstNumber + +secondNumber;
    else
        return firstNumber.toString() + secondNumber.toString();
};
console.log(addNumber(1, 2, 'asNumber'));
console.log(addNumber('Pallab', ' Majumdar', 'asString'));
//# sourceMappingURL=literelType.js.map