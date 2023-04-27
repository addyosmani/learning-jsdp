// Filename: cakeFactory.js
// =========================================
// specify dependencies
import {baker} from "./staff.mjs";

export const cakeFactory = {
    oven: {
        makeCupcake(toppings) {
            baker.bake("cupcake", toppings);
         },
         makeMuffin(mSize) {
             baker.bake("muffin", mSize);
         }
    }
}