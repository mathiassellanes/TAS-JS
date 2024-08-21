const getRandomInt = (max) => Math.floor(Math.random() * max);

const people = Array.from({length: 10}, () => ({
  name: `Person ${getRandomInt(100)}`,
  yearOfBirth: getRandomInt(2000),
  yearOfDeath: getRandomInt(2000),
}));

function findTheOldest(people) {
  return people.reduce((oldest, current) => {
    const age = current.yearOfDeath - current.yearOfBirth;

    if (age > oldest.age) {
      return {
        name: current.name,
        yearOfBirth: current.yearOfBirth,
        yearOfDeath: current.yearOfDeath,
        age,
      };
    }

    return oldest;
  }, {
    name: '',
    yearOfBirth: 0,
    yearOfDeath: 0,
    age: 0,
  });
}

const oldestPerson = findTheOldest(people);

console.log(`The oldest person is ${oldestPerson.name} with ${oldestPerson.age} years`);
