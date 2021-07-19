  
document.addEventListener('DOMContentLoaded', function () {

    const diceContainer = document.getElementById('dice-container'),
        generateBtn = document.getElementById('generate-btn'),
        rollBtn = document.getElementById('roll-btn'),
        sumBtn = document.getElementById('sum-btn');

    let numOfDice = 0,
        diceArray = [];

    generateBtn.addEventListener('click', function () {
        new Die()
    });

    rollBtn.addEventListener('click', () => {
        diceArray.forEach(die => die.roll());
    });

    sumBtn.addEventListener('click', function () {
        let sum = 0
        diceArray.forEach(die => {
            sum = sum + die.value;
        });
        alert(sum)
    });

    class Die {
        constructor() {
            this.render();
            // this.div.addEventListener('click', () => this.div.style.backgroundColor = this.randomColor());
            // rollBtn.addEventListener('click', () => this.roll());
            this.roll();

            diceArray.push(this);
            console.log(diceArray);
        };

        render() {
            this.div = document.createElement('div');
            this.div.className = 'die';
            this.div.id = numOfDice++
            diceContainer.appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.roll();
            });
            this.div.addEventListener('dblclick', () => this.removeDie());
        }

        // determines the value of the dice
        roll() {
            let randomVal = () => Math.floor(Math.random() * 6) + 1;
            this.value = randomVal();
            this.div.innerText = this.value
        }

        removeDie() {
            const index = diceArray.indexOf(this)
            if (index > -1) {
                diceArray.splice(index, 1);
            }
            diceContainer.removeChild(this.div)
        }
    }
})