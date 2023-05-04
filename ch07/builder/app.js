class FastFoodBuilder {
  addBread() { }
  addSauce() { }
  addToppings() { }
  addCheese() { }
  getResult() { }
}

class PizzaBuilder extends FastFoodBuilder {
  constructor() {
    super();
    this.pizza = {};
  }

  addBread() {
    this.pizza.bread = "Thin crust";
    return this;
  }

  addSauce() {
    this.pizza.sauce = "Tomato sauce";
    return this;
  }

  addToppings() {
    this.pizza.toppings = ["Pepperoni", "Mushrooms", "Olives"];
    return this;
  }

  addCheese() {
    this.pizza.cheese = "Mozzarella";
    return this;
  }

  getResult() {
    return this.pizza;
  }
}

class BurgerBuilder extends FastFoodBuilder {
    constructor() {
      super();
      this.burger = {};
    }
  
    addBread() {
      this.burger.bread = "Brioche bun";
      return this;
    }
  
    addSauce() {
      this.burger.sauce = "Mayonnaise";
      return this;
    }
  
    addToppings() {
      this.burger.toppings = ["Lettuce", "Tomato", "Onions"];
      return this;
    }
  
    addCheese() {
      this.burger.cheese = "Cheddar";
      return this;
    }
  
    getResult() {
      return this.burger;
    }
  }
  

class FastFoodDirector {
    constructor() {}
  
    setBuilder(builder) {
      this.builder = builder;
    }
  
    construct() {
      this.builder.addBread().addSauce().addToppings().addCheese();
      return this.builder.getResult();
    }
  }
  
  

  document.getElementById("createPizza").addEventListener("click", () => {
    const pizzaBuilder = new PizzaBuilder();
    const fastFoodDirector = new FastFoodDirector();
    fastFoodDirector.setBuilder(pizzaBuilder);
    const pizza = fastFoodDirector.construct();
  
    document.getElementById("result").innerHTML = `
      <h2>Pizza:</h2>
      <p>Bread: ${pizza.bread}</p>
      <p>Sauce: ${pizza.sauce}</p>
      <p>Toppings: ${pizza.toppings.join(", ")}</p>
      <p>Cheese: ${pizza.cheese}</p>
    `;
  });
  
  document.getElementById("createBurger").addEventListener("click", () => {
    const burgerBuilder = new BurgerBuilder();
    const fastFoodDirector = new FastFoodDirector();
    fastFoodDirector.setBuilder(burgerBuilder);
    const burger = fastFoodDirector.construct();
  
    document.getElementById("result").innerHTML = `
      <h2>Burger:</h2>
      <p>Bread: ${burger.bread}</p>
      <p>Sauce: ${burger.sauce}</p>
      <p>Toppings: ${burger.toppings.join(", ")}</p>
      <p>Cheese: ${burger.cheese}</p>
    `;
  });
  