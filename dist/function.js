"use strict";
function calculareTax(income, taxYear) {
    if (taxYear < 2022 && income < 50000)
        return income * 1.2;
    return income * 1.3;
}
function calculareTax1(income, taxYear = 2022) {
    if (taxYear < 2022 && income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculareTax(40000, 2022));
console.log(calculareTax1(40000, 2020));
//# sourceMappingURL=function.js.map