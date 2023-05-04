class Character {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    attack() {
        return this.strategy.execute();
    }
}

class SwordAttack {
    execute() {
        return "You attacked with a sword!";
    }
}

class BowAttack {
    execute() {
        return "You attacked with a bow!";
    }
}

class MagicAttack {
    execute() {
        return "You attacked with magic!";
    }
}

const output = document.getElementById("output");
const strategySelect = document.getElementById("strategy");
const attackBtn = document.getElementById("attackBtn");

const player = new Character(new SwordAttack());

attackBtn.addEventListener("click", () => {
    const selectedStrategy = strategySelect.value;
    switch (selectedStrategy) {
        case "sword":
            player.setStrategy(new SwordAttack());
            break;
        case "bow":
            player.setStrategy(new BowAttack());
            break;
        case "magic":
            player.setStrategy(new MagicAttack());
            break;
    }
    output.innerText = player.attack();
});
