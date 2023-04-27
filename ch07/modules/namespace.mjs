// A private counter variable
let myPrivateVar = 0;

// A private function that logs any arguments
const myPrivateMethod = foo => {
  console.log(foo);
};

const myNamespace = {
  // A public variable
  myPublicVar: 'foo',

  // A public function utilizing privates
  myPublicFunction(bar) {
    // Increment our private counter
    myPrivateVar++;

    // Call our private method using bar
    myPrivateMethod(bar);
  },
};

export default myNamespace;