import * as staff from "./staff.mjs";

export const cakeFactory = {
    oven: {
        makeCupcake(toppings) {
            staff.baker.bake( "cupcake", toppings );
         },
         makeMuffin(mSize) {
            staff.pastryChef.make( "muffin", mSize );
         }
    }
}

export default cakeFactory;