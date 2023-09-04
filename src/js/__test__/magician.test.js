import Magician from '../magician.js';

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
