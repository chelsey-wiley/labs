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

/* COMPLETED 
Expected output:
[ 42, 17 ]
*/
