class Person1 {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
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
