let counter = 0;

export function incrementCounter() {
  counter++;
}

export function resetCounter() {
  counter = 0;
}

export function getCounter() {
  return counter;
}

export default { incrementCounter, resetCounter, getCounter}