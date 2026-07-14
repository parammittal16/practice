class Solution {
    peakElement(arr) {
        let l = arr.length;

        if(l < 2 || arr[0] > arr[1]) return 0;
        if(arr[0] > arr[1]) return 0;
        
        if(arr[l-1] > arr[l-2]) return l-1;
        
        let i = 1, j = l-2;
        
        while(i <= j) {
            let m = Math.floor((i + j) / 2);
            if(arr[m] > arr[m+1] && arr[m] > arr[m-1]) return m;
            
            if(arr[m+1] > arr[m]) i = m+1;
            else j = m-1;
        }
    }
}