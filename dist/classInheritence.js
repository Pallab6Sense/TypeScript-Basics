"use strict";
class Person2 {
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
class Admin extends Person2 {
    printMethods() {
        console.log('Admin class has all the properties from Person2 class');
    }
}
var newUser = new Person2('Pallab', 'majumdarp79@gmail.com', 23);
console.log(newUser);
console.log(newUser.logIn());
console.log(newUser.logOut());
var newAdmin = new Admin('joe', 'joe@gmail.com', 23);
console.log(newAdmin);
console.log(newAdmin.logIn());
console.log(newAdmin.logOut());
//# sourceMappingURL=classInheritence.js.map