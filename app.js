let squareContainer = document.createElement("div");
squareContainer.className = "container";
document.body.appendChild(squareContainer);
let diceArray = [];

class Die {
    constructor() {
        this.div = document.createElement("div");
        this.div.className = "die";
        squareContainer.appendChild(this.div);
        this.roll();
    }

    roll() {
        let num = (Math.floor(Math.random() * 6) + 1);
        this.value = num;
        this.div.innerHTML = this.value;
    }
}

document.querySelector("#generateRoll").addEventListener("click", () => {
    let die = new Die();
    diceArray.push(die);

})

document.querySelector("#rollDice").addEventListener("click", () => {
    diceArray.forEach((die) => {
        die.roll()
        console.log(die);
    })
})
