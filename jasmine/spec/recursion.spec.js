describe('isEven', function () {
    it('checks if a number is even', function () {
        expect(isEven(6)).toEqual(true);
        expect(isEven(3)).toEqual(false);
    });
});