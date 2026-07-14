class Solution {
    getMinMax(arr) {
        const l = arr.length;

        if(l === 1) {
            return [arr[0], arr[0]];
        }
        let min = Infinity, max = -Infinity;

        for(let i = 0; i< arr.length; i++) {
            if(arr[i] < min) min = arr[i];
            if(arr[i] > max) max = arr[i];
        }
        return [min, max];
    }
}