const sum = (a, b) => a + b;

test('Suma 1 + 2 y debe dar 3', () => {
    expect(sum(1, 2)).toBe(3);
});
