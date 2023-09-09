import Character from '../character.js';
import Bowerman from '../bowerman.js';

test('make personage Character', () => {
    const result = new Character('John', 'Swordsman');
    expect(result).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
      });
  });

test('testing little name personage', () => {
    expect(() => new Character('J', 'Swordsman')).toThrow('Имя не соответствует параметрам');
});

test('testing big name personage', () => {
    expect(() => new Character('JonathanWick', 'Swordsman')).toThrow('Имя не соответствует параметрам');
});

test('testing invalid type personage', () => {
    expect(() => new Character('John', 'Swordsmann')).toThrow('Неизвестный тип данных');
});

test('use function levelUp', () => {
const result = new Bowerman('John', 'Bowerman');
result.levelUp();
expect(result).toEqual({
    name: 'John',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
    });
});

test('use function levelUp with zero health', () => {
    const result = new Character('John', 'Swordsman');
    result.health = 0;
    expect(() => result.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('use function damage', () => {
    const result = new Bowerman('John', 'Bowerman');
    result.damage(10);
    expect(result).toEqual({
        name: 'John',
        type: 'Bowerman',
        health: 92.5,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('use function dsmage with zero health', () => {
    const result = new Bowerman('John', 'Bowerman');
    result.health = 0;
    result.damage(10);
    expect(result.health).toEqual(0);
});
