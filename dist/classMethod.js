"use strict";
class Person1 {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    logIn() {
        return `${this.email} has just been logged in`;
    }
    logOut() {
        return `${this.email} has just been logged out`;
    }
}
var newUser = new Person1('Pallab', 'majumdarp79@gmail.com', 23);
console.log(newUser);
console.log(newUser.logIn());
console.log(newUser.logOut());
//# sourceMappingURL=classMethod.js.map