class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class UnitCard extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  showStats() {
    console.log(`
      Name : ${this.name}
      Cost: ${this.cost}
      Power : ${this.power}
      Resilience : ${this.resilience}
      `);
  }
  attack(enemy) {
    console.log(`You launch an attack on ${enemy.name}!`);
    enemy.resilience -= this.power;
    if (enemy.resilience <= 0) {
      console.log("They dead");
    }
    return enemy;
  }
}
class EffectCard extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  playCard(cardOn) {
    console.log(
      `You played ${this.name} on ${cardOn.name} and it is going to ${this.text}`
    );
    return (cardOn[this.stat] += this.magnitude);
  }
}

const redBeltNinja = new UnitCard("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new UnitCard("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new EffectCard(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const unhandledPromiseRejection = new EffectCard(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "resilience",
  -2
);
const pairProgramming = new EffectCard(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);
// redBeltNinja.showStats();
// hardAlgorithm.playCard(redBeltNinja);
// redBeltNinja.showStats();
// unhandledPromiseRejection.playCard(redBeltNinja);
// redBeltNinja.showStats();
// pairProgramming.playCard(redBeltNinja);
// redBeltNinja.showStats();
redBeltNinja.showStats();
blackBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
redBeltNinja.showStats();
blackBeltNinja.showStats();
