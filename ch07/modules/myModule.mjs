// myModule.js
import { privateMethod } from "./privateMethods.mjs";

const myModule = () => ({
  publicMethod() {
    privateMethod();
  },
});

export default myModule;