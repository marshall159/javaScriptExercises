describe('min', function () {
    it('returns minimum of two arguments', function () {
        expect(min(1, 6)).toEqual(1);
        expect(min(1, -1)).toEqual(-1);
    });
});