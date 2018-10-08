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

// As a bonus assignment, modify your range function to take an optional third argument
// that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
// negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

describe('range', function () {
    it('returns an array of numbers from start to end', function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(range(1, 10)).toEqual(arr);
    });
    it('has a step value to increment/decrement', function () {
        expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
        expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
    });
});

describe('sum', function () {
    it('sums the values of an array of numbers', function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(sum(arr)).toEqual(55);
    });
});