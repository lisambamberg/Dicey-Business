let squareContainer = document.createElement("div");
squareContainer.className = "container";
document.body.appendChild(squareContainer);

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.className = "box";
        squareContainer.appendChild(this.div);
        console.log(this);
    }

    roll() {
        (Math.floor(Math.random() * 6) + 1);
       
    }
}

let diceArray = [];
document.querySelector("#generateRoll").addEventListener("click", () => {
    new Die();
})
