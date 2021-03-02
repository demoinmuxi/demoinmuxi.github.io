let dp=[1,1];
for (let i = 2; i < 10; i++) {
    dp[i]=dp[i-1]+dp[i-2];
    // console.log('+++',dp,i,'----');
}
// let money=[1,2,3,4,5,100,3,20,10,1,2,0,9,1,20,3,90,100,2,9,29,89,2,1,0,2,1,2,1,100,11,222,11,0,11,221,2];
let money=[2,7,9,3,1];
// dp.length=3;
// let interval=2;
// let sum=0;
// for (let i = 0; i < money.length; i+=interval) {
//     let first=money[i]||0;
//     let second=money[i+1]||0;
//     let third=money[i+2]||0;
//     let nfirst=money[i+3]||0;
//     let nsecond=money[i+4]||0;
//     let nthird=money[i+5]||0;
//     if (first>second||((first+third)>=second&&(third>nfirst))) {
//         console.log(first);
//         sum+=first;
//     }else{
//         console.log(second);
//         sum+=second;
//         i+=1;
//     }
// }
// console.log(sum);
let ddp=[0,money[0]];
for (let i = 2; i <= money.length; i++) {
    console.log(ddp[i-2],money[i-1],ddp[i-1],'+++');
    ddp[i]=Math.max(ddp[i-2]+money[i-1],ddp[i-1]);
    console.log(ddp,i,'----');     
}