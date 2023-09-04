import Bowerman from '../bowerman.js';

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
