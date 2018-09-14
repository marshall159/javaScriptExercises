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

function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i+= step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i+= step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let res = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}