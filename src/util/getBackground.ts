export const getBackground = () => {
  let numbers = Array.from({ length: 10 }, (_, idx) => idx);

  const random = Math.floor(Math.random() * numbers.length);
  const selectedNumber = numbers[random];

  numbers.splice(random, 1);
  console.log(selectedNumber)
  return selectedNumber;
};
