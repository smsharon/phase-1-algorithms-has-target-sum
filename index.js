function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
  The time complexiy is O(n²) sice it is a nested loop, where n is the number of elements in the input array. For each element in the array, you are checking all the remaining elements to find a complement.
  The space complexity is O(n) because there are no additional data structures used in the function and the space required is proportional to the number of elements in the array.
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  iterate over the remaining numbers in the array
  check if any of the remaining numbers is the complement
  if so, return true
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here

We start by iterating over the input array of numbers using a loop with index i. For each number at index i, we consider it as a potential first number in the pair.
Next, we calculate the complement of the current number. The complement is the value that, when added to the current number, gives us the target integer. This is done by subtracting the current number from the target: complement = target - array[i].
After calculating the complement, we enter another loop with index j, starting from i+1, to iterate over the remaining numbers in the array. We consider each of these remaining numbers as potential second numbers in the pair.
Inside the inner loop, we check if the current number at index j is equal to the complement we calculated earlier. If it is, that means we have found a pair of numbers that add up to the target integer. In this case, we immediately return true from the function, indicating that a pair exists.
If the inner loop completes without finding a matching complement for the current number at index i, we move on to the next iteration of the outer loop. This process continues until we have considered all possible pairs in the array.
If the outer loop completes without finding any pair that adds up to the target integer, the function returns false, indicating that no such pair exists.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 9));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 12));


  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
