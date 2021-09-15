var twoSum = function(nums,target) {
    let som;
	for (let i = 0; i < nums.length; i++){
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
			return [i,j]
			}
		}
		
	}
};
let a = 10;
let tab=[1,5,7,8,5]
console.log(twoSum(tab,a));