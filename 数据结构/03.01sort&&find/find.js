let arr = [2, 3, 4, 2, 3, 23, 1, 123, 23];
function find(val, arr) {
    // let temp=Object.assign([],arr);
    arr.sort((a,b)=>a-b);
    let high = arr.length - 1;
    let low = 0;
    while (high >= low) {
        const mid = (high + low) >> 1;
        if (val > arr[mid]) {
            low = mid+1;
        } else if (val < arr[mid]) {
            high =mid- 1;
        } else {
            arr=temp;
            return mid;
        }
    }
    return -1;
}
