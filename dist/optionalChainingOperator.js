"use strict";
var _a, _b, _c, _d;
const person = {
    name: 'Dom',
    age: 22,
    vehicle: {
        year: 2020,
        drive: {
            drive() {
                return 'I am driving a car';
            },
        },
    },
};
const vehicleYear = (_a = person.vehicle) === null || _a === void 0 ? void 0 : _a.year;
console.log(vehicleYear);
console.log((_d = (_c = (_b = person.vehicle) === null || _b === void 0 ? void 0 : _b.drive) === null || _c === void 0 ? void 0 : _c.drive) === null || _d === void 0 ? void 0 : _d.call(_c));
//# sourceMappingURL=optionalChainingOperator.js.map