// Remove all duplicates from an array of integers

// Return: array — without any duplicates

// For this next solution, I got the idea from this blogpost which shows how to do this in Java. The concept is to do the opposite of what I did in solution 1 (looking 1 ahead), to keeping track of the one behind. By keeping track of the previous item encountered, we know whether or not we have encountered the number and whether or not to push to the result array.

// Note: in order for this solution to work, we need a sorted array. In the Java example, they performed a .sort() method on the array before looping through it. For me, I will just assume that we are getting a sorted array as an input.

const arr = [1, 4, 4, 2, 3, 4, 5, 5, 3];
arr.sort();

const removeDuplicates = (arr) => {
    let result = [];
    let previous = arr[0];
    result[0] = previous;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== previous) {
            result.push(arr[i]);
        }
        previous = arr[i];
    }
    return result;
};

console.log(arr);
console.log(removeDuplicates(arr));
