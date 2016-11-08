var nums = [1, 6, 42, 3, 17];
var bigNums = [];
var i = 0;
//loop goes here
while (i < nums.length) {
  if (nums[i] > 10 ) {
    bigNums.push(nums[i])
  }
  i++;
}
console.log(bigNums);

/* COMPLETED as a team with Kyle and Chad! 
Write a while loop to loop over the array of numbers and collect all the numbers over 10 into another array.
Don't remember how to add something to a JS array? Google it!
Expected output:
[ 42, 17 ]
*/
