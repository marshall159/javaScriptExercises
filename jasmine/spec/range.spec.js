// The introduction of this book alluded to the following as a nice way to compute the sum
// of a range of numbers:
//
//  sum(range(1, 10));
//
// Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.

describe('range', function () {
    it('returns an array of numbers from start to end', function () {
        expect(range(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

