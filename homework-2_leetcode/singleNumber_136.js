
// const _array = [4,1,2,1,2]
// const _array = [2,2,1]
// const _array = [1]
const _array = [1,2,3,3,4,5,1,4,5]


let singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur)
};


console.log(singleNumber(_array))