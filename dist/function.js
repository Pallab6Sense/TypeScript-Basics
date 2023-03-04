"use strict";
function calculareTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculareTax(40000));
//# sourceMappingURL=function.js.map