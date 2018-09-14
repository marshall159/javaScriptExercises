describe('beanCounting', function () {
    it('counts the number of Bs', function () {
        expect(countBs('Big Ben backs off')).toEqual(2);
    });
});