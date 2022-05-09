const operations = require('../src/operations');

test('adds 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
});

test('getSmallest(1, 2) to equal 1', () => {
    expect(operations.getSmallest(1, 2)).toBe(2);
})