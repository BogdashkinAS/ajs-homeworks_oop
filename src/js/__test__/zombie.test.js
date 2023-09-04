import Zombie from '../zombie.js';

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
