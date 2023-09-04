import Swordsman from '../swordsman.js';

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
