let tuple: [number, string] = [1, 'pallab'];
tuple.push(2, 'x');
tuple.push(3, 'y');
tuple.push(4, 'z');
tuple.push(5, 'A');

console.log(tuple);

tuple.map((item) => {
  console.log(item);
});
