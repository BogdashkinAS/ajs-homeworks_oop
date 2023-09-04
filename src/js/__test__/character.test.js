import Character from '../character.js';
import Bowerman from '../bowerman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('make personage Character', () => {
    const result = new Character('John', 'Swordsman', 20, 30);
    expect(result).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 20,
        defence: 30,
      });
  });

test('testing little name personage', () => {
    expect(() => new Character('J', 'Swordsman', 20, 30)).toThrow('Имя не соответствует параметрам');
});

test('testing big name personage', () => {
    expect(() => new Character('JonathanWick', 'Swordsman', 20, 30)).toThrow('Имя не соответствует параметрам');
});

test('testing invalid type personage', () => {
    expect(() => new Character('John', 'Swordsmann', 20, 30)).toThrow('Неизвестный тип данных');
});

test('use function levelUp', () => {
const result = new Character('John', 'Swordsman', 20, 30);
result.levelUp();
expect(result).toEqual({
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 24,
    defence: 36,
    });
});

test('use function levelUp with zero health', () => {
    const result = new Character('John', 'Swordsman', 20, 30);
    result.health = 0;
    expect(() => result.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('use function points', () => {
    const result = new Character('John', 'Swordsman', 20, 30);
    result.damage(10);
    expect(result).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 93,
        level: 1,
        attack: 20,
        defence: 30,
    });
});

test('use function points with zero health', () => {
    const result = new Character('John', 'Swordsman', 20, 30);
    result.health = 0;
    result.damage(10);
    expect(result.health).toEqual(0);
});

test('make personage Bowerman', () => {
    const result = new Bowerman('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('make personage Swordsman', () => {
    const result = new Swordsman('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('make personage Daemon', () => {
    const result = new Daemon('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('make personage Magician', () => {
    const result = new Magician('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('make personage Undead', () => {
    const result = new Undead('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('make personage Zombie', () => {
    const result = new Zombie('John');
    expect(result).toEqual({
        name: 'John',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
