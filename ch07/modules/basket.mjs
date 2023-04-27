// privates

const basket = [];

const doSomethingPrivate = () => {
  //...
};

const doSomethingElsePrivate = () => {
  //...
};

// Create an object exposed to the public
const basketModule = {
  // Add items to our basket
  addItem(values) {
    basket.push(values);
  },

  // Get the count of items in the basket
  getItemCount() {
    return basket.length;
  },

  // Public alias to a private function
  doSomething() {
    doSomethingPrivate();
  },

  // Get the total value of items in the basket
  // The reduce() method applies a function against an accumulator and each 
  // element in the array (from left to right) to reduce it to a single value.
  getTotal() {
    return basket.reduce((currentSum, item) => item.price + currentSum, 0);
  },
};

export default basketModule;