import Character from '../character.js';

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
