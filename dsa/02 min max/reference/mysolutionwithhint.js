class Solution {
    getMinMax(arr) {
        let min = Infinity, max = -Infinity, l = arr.length, i = 0;
        if(l % 2 !== 0) {
            min = max = arr[0];
            i++;
        }
        for(;i<l-1;i=i+2) {
            let mini = arr[i], maxi = arr[i+1];
            if(arr[i+1] < arr[i]) {
                mini = arr[i+1];
                maxi = arr[i];
            }
            min = Math.min(min, mini);
            max = Math.max(max, maxi);
        }
        return [min, max];
    }
}