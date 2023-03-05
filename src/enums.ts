const enum fruitsPrice {
  apple,
  mango,
  guava,
} //! if we don't give any value in enum it will take tha value of its index as a default value like here 1,2,3

const applePrice = fruitsPrice.apple;
const mangoPrice = fruitsPrice.mango;
const guavaPrice = fruitsPrice.guava;

console.log(applePrice, mangoPrice, guavaPrice);

const enum fruitsPrice1 {
  apple,
  mango = 6,
  guava,
} //! if we give any variable a value in enum it will initialize the other variable value which are after the initialized value in a
//!consecutive manner.like here the values are 0,6,7.

const applePrice1 = fruitsPrice1.apple;
const mangoPrice1 = fruitsPrice1.mango;
const guavaPrice1 = fruitsPrice1.guava;

console.log(applePrice1, mangoPrice1, guavaPrice1);

const enum fruitsPrice2 {
  apple = 4,
  mango = 6,
  guava = 8,
} //!fully initialized enum

const applePrice2 = fruitsPrice2.apple;
const mangoPrice2 = fruitsPrice2.mango;
const guavaPrice2 = fruitsPrice2.guava;

console.log(applePrice2, mangoPrice2, guavaPrice2);
