function solution(nums) {
    const maxCount = nums.length / 2;
    const minCount = [...new Set(nums)].length
    
    return maxCount <= minCount ? maxCount : minCount;
}