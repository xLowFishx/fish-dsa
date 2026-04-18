# Two Sum

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input has exactly one valid answer, and you may not use the same element twice.

You can return the answer in any order.

## Expected Function Signature

```js
export default function twoSum(nums, target) {}
```

## Examples

```text
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```

```text
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
```

```text
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists
