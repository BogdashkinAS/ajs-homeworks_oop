const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя не соответствует параметрам');
        }
        if (!types.includes(type)) {
            throw new Error('Неизвестный тип данных');
        }
    }

    levelUp() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else throw new Error('Нельзя повысить левел умершего');
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}