class Player {
    constructor() {
      this.score = 0;
      this.multiplierActive = false;
    }

    collectCoin() {
      this.score += this.multiplierActive ? 2 : 1;
    }

    getScore() {
      return this.score;
    }

    toggleMultiplier() {
      this.multiplierActive = !this.multiplierActive;
    }

    isMultiplierActive() {
      return this.multiplierActive;
    }
  }

  const player = new Player();
  const playerProxy = new Proxy(player, {
    get(target, prop) {
      return target[prop];
    },

    set(target, prop, value) {
      if (prop === 'score') {
        if (value % 10 === 0) {
          target.toggleMultiplier();
        }
      }
      target[prop] = value;
      return true;
    }
  });

  document.getElementById("collectCoin").addEventListener("click", () => {
    playerProxy.collectCoin();
    document.getElementById("score").textContent = `Score: ${playerProxy.getScore()}`;
    document.getElementById("multiplierStatus").textContent = playerProxy.isMultiplierActive() ? 'Multiplier Status: Active' : 'Multiplier Status: Inactive';
  });