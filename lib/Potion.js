class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 50);
        } else {
            this.value = Math.floor(Math.random() * 5 + 15);
        }
    }
};


module.exports = Potion;