import Character from './character.js';

export default class Daemon extends Character {
    constructor(name, type) {
        super(name, type = 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}
