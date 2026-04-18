export default function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index += 1) {
    const value = nums[index];
    const needed = target - value;

    if (seen.has(needed)) {
      return [seen.get(needed), index];
    }

    seen.set(value, index);
  }

  throw new Error("No valid pair found");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("twoSum([2, 7, 11, 15], 9) =", twoSum([2, 7, 11, 15], 9));
  console.log("twoSum([3, 2, 4], 6) =", twoSum([3, 2, 4], 6));
}
