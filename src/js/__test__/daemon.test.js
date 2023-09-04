import Daemon from '../daemon.js';

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
