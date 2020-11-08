export default class SearchRotatedArray {

    /*
        You are given an integer array nums sorted in ascending order, and an integer target.

        Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] 
        might become [4,5,6,7,0,1,2]).
        
        If target is found in the array return its index, otherwise, return -1.
        
        Example 1:
        
        Input: nums = [4,5,6,7,0,1,2], target = 0
        Output: 4
    */
    constructor() {}

    buildCache(nums) {
        // build the cache of elements based on the element
        // value being the key and the index being the value
        // so that we can look up the index by the element 
        var cache = {};
        for (var x = 0; x < nums.length; x++) {
            cache[nums[x] + ""] = x;
        }
        return cache;
    }

    search(nums, target) {

        if (nums.length === 0) {
            return -1;
        }

        if (nums.length === 1 && nums[0] == target) {
            return 0;
        } else if (nums.length == 1) {
            return -1;
        }

        // save the original index locations of the values
        // before we search so we can look it up later
        var cache = this.buildCache(nums);

        // merge sort to unrotate the array 
        this.sort(nums, 0, nums.length - 1);

        var left = 0; 
        var right = nums.length - 1;
        var mid = Math.floor((right + left) / 2);

        // binary search through the array by halving the 
        // values each time to narrow the search
        while (left <= right) {
            if (nums[mid] == target) {
                // if we found the target then return it
                return cache[nums[mid]];
            } else if (nums[mid] < target) {
                // if the target is bigger than the mid value
                // increase the left side so we narrow down
                // the right side
                left = mid + 1;
            } else {
                // otherwise reduce the right side to make the left 
                // side the main area we'll look at
                right = mid - 1;
            }
            mid = Math.floor((right + left) / 2);
        }

        // if we can't find the target return -1
        return -1;
    }

    sort(nums, left, right) {
        if (left < right) {
            var mid = Math.floor((right + left) / 2);
            this.sort(nums, left, mid);
            this.sort(nums, mid + 1, right);
            this.merge(nums, left, mid, right);
        }
    }

    merge(nums, left, mid, right) {

        var leftSide = [];
        var rightSide = [];
        var n1 = mid - left + 1;
        var n2 = right - mid;

        for (var x = 0; x < n1; x++) {
            leftSide[x] = nums[left + x];
        }

        for (var x = 0; x < n2; x++) {
            rightSide[x] = nums[mid + 1 + x];
        }

        var i = 0;
        var j = 0;
        var k = left;

        while (i < n1 && j < n2) {
            if (leftSide[i] <= rightSide[j]) {
                nums[k] = leftSide[i];
                i++
            } else {
                nums[k] = rightSide[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            nums[k] = leftSide[i];
            i++;
            k++;
        }

        while (j < n2) {
            nums[k] = rightSide[j];
            j++;
            k++;
        }

    }

}