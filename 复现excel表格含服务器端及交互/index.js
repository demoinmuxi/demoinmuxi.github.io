window.onload=function(){
    let table=document.querySelector('table');
    let body=document.querySelector('#body');
    let header=document.querySelector('#header');
    body.style.width=header.style.width=table.offsetWidth+'px';
}
var header=new Vue({
    el:'#header',
    data:{
            number:'',
            projectname:'',
    },

}); 
var body=new Vue({
    el:'#body',
    data:{
        filename:'',
        typename:'',
        supplydepartment:'',
        date0:'',
        judgedepartment:'',
        date1:'',
        have:'',
        none:'',
        vicefilename:'',
        maindepartment:'',
        mainpeople:'',
        about0:'',
        about1:'',
        about2:'',
        about3:'',
        about4:'',
        about5:'',
        departmentnumber0:'',
        departmentnumber1:'',
        departmentnumber2:'',
        departmentnumber3:'',
        judgepeople0:'',
        judgepeople1:'',
        judgepeople2:'',
        judgepeople3:'',
        judgepeoplex:'',
        judgepeoplexs:'',
        isok:'',
        havemodify:'',
        ifothers:'',
        others:'',
        signdate:'',
        signdate0:'',
        judgepeoplefinal:'',
        judgepeoplexsfinal:'',
    },
});
var targeturl="http://localhost:3000"
var ajax = new XMLHttpRequest();
// start
// var getjson=new Promise((reslove,reject)=>{
//     ajax.open('get',targeturl,true);
//     ajax.send();
//     ajax.onreadystatechange = function () {
//     if (ajax.readyState==4 &&ajax.status==200) {
//     　　　　reslove(ajax.responseText);
//     　　}
//     }
// });
// getjson.then(r=>{
//     var getprase=JSON.parse(r);
//     for(let k in getprase.header){
//         if(getprase.header.hasOwnProperty(k))
//             Vue.set(header._data,k,getprase.header[k]);
//     }
//     for(let k in getprase.body){
//         if(getprase.body.hasOwnProperty(k))
//             Vue.set(body._data,k,getprase.body[k]);
//     }
// });
// // end 从本地服务器获取数据
// //start
// document.querySelector('footer').addEventListener('click',function(){
//     var obj={
//         header:header._data,
//         body:body._data,
//     }
//     var postjson=JSON.stringify(obj);
//     ajax.open('POST',targeturl,true);
//     ajax.setRequestHeader('Content-type','application/json;charset-UTF-8');
//     ajax.send(postjson);
//     console.log("发送过去的数据是");
//     console.log(postjson);
//     ajax.onreadystatechange = function () {
//         if (ajax.readyState==4 &&ajax.status==200) {
//             console.log(ajax.responseText);
//         　　}
//         }
    
// });
// // end 提交数据至本地服务器
