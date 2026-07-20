function sort012(arr) {
    let m = { 1: 0, 2: 0 }, i = 0, j = 0;
    while (j < arr.length) {
        if (arr[j] === 1 || arr[j] === 2) {
            m[arr[j]]++;
        } else {
            arr[i] = 0;
            i++;
        }
        j++;
    }
    for (let k in m) {
        for (let a = 0; a < m[k]; a++) {
            arr[i] = k;
            i++;
        }
    }
}