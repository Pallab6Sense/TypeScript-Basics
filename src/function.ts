function calculareTax(income: number, taxYear: number): number {
  if (taxYear < 2022 && income < 50_000) return income * 1.2;
  return income * 1.3;
}

function calculareTax1(income: number, taxYear = 2022): number {
  //! taxYear?: number   taxYear=2022
  //!taxyear is a optional parameter here.we can fix the optional
  //!parameter by give a default value.but the better practice is to give a  default value in the function parameter.
  if ((taxYear || 2022) < 2022 && income < 50_000) return income * 1.2;
  return income * 1.3;
}

console.log(calculareTax(40_000, 2022));
