class Person {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

var userOne = new Person('Pallab', 'majumdarp79@gmail.com', 23);

console.log(userOne);
