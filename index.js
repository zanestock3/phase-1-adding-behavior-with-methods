// Your code here
class Cat {
    constructor(name, sex, speak) {
        this.name = name;
        this.sex = sex;
        this.speak = speak;
    }
    sasha() {
        return `${this.name} says ${this.speak}!`
    }
}

class Dog {
    constructor(name, sex, speak) {
        this.name = name;
        this.sex = sex;
        this.speak = speak;
    }
}

class Bird {
    constructor(name, sex, speak) {
        this.name = name;
        this.sex = sex;
        this.speak = speak;
    }
}

let sasha = new Cat("Sasha", "female", "meow")



