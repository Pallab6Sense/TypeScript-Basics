interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'pallab Majumdar',
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount} times`);
    return amount;
  },
};

console.log(me.spend(10));
console.log(me.name);
console.log(me.age);
