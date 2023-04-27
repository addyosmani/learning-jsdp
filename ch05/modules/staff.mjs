// Filename: staff.mjs
// =========================================
// specify (public) exports that can be consumed by other modules
export const baker = {
   bake(item) {
      console.log( `Woo! I just baked ${item}` );
    }
};

export const pastryChef = {
   make(item) {
      console.log( `Woo! I just made a ${item}` );
   }
}; 

export default { baker, pastryChef };