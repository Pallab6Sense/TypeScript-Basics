"use strict";
const me = {
    name: 'pallab Majumdar',
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount} times`);
        return amount;
    },
};
console.log(me.spend(10));
console.log(me.name);
console.log(me.age);
//# sourceMappingURL=interface.js.map