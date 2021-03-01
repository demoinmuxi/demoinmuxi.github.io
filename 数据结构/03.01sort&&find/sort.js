let selectSort = (arr) => {
    //先找到第一小的，交换位置，再找到第二小的交换位置，再找到第三小的交换位置
    let assumeindex = 0;
    for (let j = 0; j < arr.length; j++) {
        assumeindex = j;
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i] < arr[assumeindex]) {
                assumeindex = i;
            }
        }
        if (assumeindex == j) continue;
        let temp = arr[j];
        arr[j] = arr[assumeindex];
        arr[assumeindex] = temp;
    }
    return arr;
}
console.log(
    selectSort([1, 2, 3, 1, 0, 8, 9, 10])
);
let insertSort = (arr) => {
    //从第二位开始，和前面每一位比较大小，直到找到自己的位置

    //splice 版本
    // let havesort = 1;
    // for (let i = 1; i < arr.length; i++) {
    //     for (let j = i - 1; j >= 0; j--) {
    //         if (arr[i] > arr[j]) {
    //             let sort = arr.splice(i, 1);
    //             arr.splice(j+1, 0, sort[0]);
    //             havesort++;
    //             break;
    //         }
    //     }
    //     if (havesort == i) {
    //         let sort = arr.splice(i, 1);
    //         arr.splice(0, 0, sort[0]);
    //         havesort++;
    //     }
    // }
    // return arr;



    //非splice版本
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i;
        while (j > 0) {
            if (arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            } else {
                break;
            }
        }
        arr[j] = current;
    }
    return arr;
}
console.log(insertSort([1, 2, 3, 1, 0, 8, 9, 10]));

let mergeSort = (arr) => {
    //先分后合，分到只剩一个元素，两两合并
    if (arr.length == 1) return arr;
    let end = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, end));
    let arr2 = mergeSort(arr.slice(end));
    console.log('分',arr1,'---',arr2);
    let res = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
    }
    if (arr1.length) {
        res = res.concat(arr1);
    } else {
        res = res.concat(arr2);
    }
    console.log('合','+++',res);
    return res;

    //!recursion to do

    // let stack = [arr];
    // let left = [];
    // let right = [];
    // let res = [];
    // let curret=false;
    // while (stack.length) {
    //     let out = stack.pop();
    //     if(out.length==1){
    //         console.log(out,'-------');
    //         continue;
    //         // while (left.length&&right.length) {
    //         //     if(left[0]<right[0]){
    //         //         res.push(left.pop());
    //         //     }else{
    //         //         res.push(right.pop());
    //         //     }
    //         // }
    //         // if(left.length){
    //         //     res=res.concat(left);
    //         // }else{
    //         //     res=res.concat(right);
    //         // }
    //     }
    //     let mid = Math.floor(out.length / 2);
    //     let arr1 = out.slice(0, mid);
    //     let arr2 = out.slice(mid);
    //     stack.push(arr1);
    //     stack.push(arr2);
    }
}
// console.log('watch');
// console.log(mergeSort([1, 2, 3, 1, 2, 0, 9, 282, 1288, 331, 12]));
let quickSort = (arr) => {
    if (arr.length == 1) return arr;
    let base = arr[0];
    let lt = [];
    let gt = [];
    arr.slice(1).forEach(r => {
        if (r < base) {
            lt.push(r);
        } else {
            gt.push(r);
        }
    });
    let sortedLt = lt.length ? quickSort(lt) : [];
    let sortedGt = gt.length ? quickSort(gt) : [];
    console.log(sortedLt, base, sortedGt);
    return sortedLt.concat([base], sortedGt);
}
console.log(quickSort([1, 2, 4, 1, 20, 10, 1, 0, 9, 2020]));
// let easy=(a)=>{
//     if(Math.abs(a)>20) return a;
//     let j=a+10;
//     let l=a+1;
//     let didj=easy(j);
//     let didl=easy(l);
//     console.log(didj,didl,'-----');
//     return didl+didj;
// }
// easy(10);

