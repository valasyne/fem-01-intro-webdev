// const person = {
//   name: 'Vassily La',
//   city: 'Minsk',
//   favoriteFood: 'beer',
//   address: {
//     street: '1234 Place',
//     apt: '123'
//   }
// };

// console.log(person);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.name);
// console.log(person['name']);

// const dog = {
//   name: 'Rolf',
//   speak() {
//     console.log('woof woof');
//   }
// };
// dog.speak();
// const me = {
//   name: {
//     first: 'Vassily',
//     last: 'La'
//   },
//   loc: {
//     city: 'Minsk',
//     country: 'Belarus'
//   }
// };
// console.log(me);
const cities = ['NYC', 'Tokyo', 'London'];
// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }
cities.forEach(function(city) {
  console.log(city);
});
