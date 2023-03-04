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

const vehicleYear = person.vehicle?.year; //! It's mean if the vehicle is available int the person object then give me the year else it
//!will be undefined or null;

console.log(vehicleYear);

console.log(person.vehicle?.drive?.drive?.()); //!optional chaining operator works for both variables and methods
