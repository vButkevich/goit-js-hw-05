function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet('Mango')); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza();
const pointer = makePizza;
console.log(result);
console.log(pointer);

// -------------------------------------------------------------
console.log('-------------------------------------------------');

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest('Mango', greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// -------------------------------------------------------------
console.log('-------------------------------------------------');

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  let message = callback(pizzaName);
  return message;
}
console.log(makeMessage('ppp', makePizza));
console.log(makeMessage('ppp', deliverPizza));
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
function makePizza2(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza2('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza2('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
  if (index > 3) {
    return;
  }
});
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
function filterArray(numbers, value) {
  let array = [];
  numbers.forEach(function (number) {
    if (number > value) {
      array.push(number);
    }
  });
  return array;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
let filterArray2 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
function changeEven(numbers, value) {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      let item = numbers[i] + value;
      array.push(item);
    } else {
      array.push(numbers[i]);
    }
  }
  return array;
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //` повертає новий масив `[12, 18, 3, 7, 14, 16]`
console.log(changeEven([17, 24, 68, 31, 42], 100)); //` повертає новий масив `[17, 124, 168, 31, 142]`
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //` повертає новий масив `[144, 13, 81, 192, 136, 154]`
console.log(changeEven([1, 2, 3, 4, 5], 10)); //` повертає новий масив `[1, 12, 3, 14, 5]`
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsLengths = planets.map(p => p.length);
console.log(planets);
console.log(planetsLengths);
// -------------------------------------------------------------
console.log('-------------------------------------------------');
// -------------------------------------------------------------
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(books);
console.log(titles);
console.log('-------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism'],
    },
  ];

  const genres = books.flatMap(book => book.genres);
  console.log(books);
  console.log(genres);
}
console.log('-------------------------------------------------');
{
  let users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];
  const getUserEmails = users => users.map(u => u.email);
  console.log(users);
  console.log(getUserEmails);
}
console.log('-------------------------------------------------');
{
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  const evenNumbers = numbers.filter(n => n % 2 === 0);
  const oddNumbers = numbers.filter(n => !(n % 2 === 0));
  console.log(evenNumbers);
  console.log(oddNumbers);
}
console.log('-------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = 'Bernard Cornwell';

  const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
  const booksByAuthor = books.filter(({ author }) => author === AUTHOR);
  console.log(topRatedBooks);
  console.log(booksByAuthor);
}
console.log('-------------------------------------------------');
{
  let users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const getUsersWithEyeColor = (users, color) => {
    // users.filter(({ eyeColor }) => eyeColor === color);
    return users.filter(user => user.eyeColor === color);
  };
  const getUsersWithEyeColor2 = (u, c) => {
    console.log(u);
    console.log(c);
    u.filter(({ eyeColor }) => eyeColor === c);
  };
  getUsersWithEyeColor(users, 'brown');
  console.log(getUsersWithEyeColor(users, 'brown'));

  function getUsersWithEyeColor3(users, color) {
    return users.filter(user => user.eyeColor === color);
    return users.filter(({ eyeColor }) => eyeColor === color);
  }
  console.log(getUsersWithEyeColor3(users, 'blue'));
}
console.log('-------------------------------------------------');
{
  console.log('age:-------------------------------------------------');
  let users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];
  const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(({ age }) => age >= minAge && age <= maxAge);
  };
  console.log(getUsersWithAge(users, 33, 44));
}
console.log('players:-------------------------------------------------');
const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, p) => {
  return (acc += p.playtime / p.gamesPlayed);
}, 0);
console.log(totalAveragePlaytimePerGame);

console.log('-------------------------------------------------');
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      rating: 7.94,
    },
    {
      title: 'Enemy of God',
      author: 'Bernard Cornwell',
      rating: 8.67,
    },
  ];

  const sortedByAuthorName = () => {
    return books.toSorted((b1, b2) => {
      b1.author.localeCompare(b2.author);
    });
  };
  console.log(sortedByAuthorName(books));
  const sortedByReversedAuthorName = books.toSorted((b1, b2) =>
    b2.author.localeCompare(b1.author)
  );

  const sortedByAscendingRating = books.toSorted(
    (b1, b2) => b1.rating - b2.rating
  );

  const sortedByDescentingRating = books.toSorted(
    (b1, b2) => b2.rating - b1.rating
  );
}
console.log('-------------------------------------------------');
console.log('-------------------------------------------------');
