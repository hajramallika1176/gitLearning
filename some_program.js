const repeat = function (char) {
  return function (times) {
    return char.repeat(times);
  };
};

const people = repeat("<o> ");
console.log(people(10));