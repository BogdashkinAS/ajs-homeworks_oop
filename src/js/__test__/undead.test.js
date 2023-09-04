import Undead from '../undead.js';

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
