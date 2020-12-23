const app=require('express')();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/',(req,res)=>{
    var obj={
        header:{
            number:'100',
            projectname:'笔试',
        },
        body:{
            filename:'第一份文件',
            typename:'电子表',
            supplydepartment:'华中师范大学',
            date0:'2020-12-23',
            judgedepartment:'常善科技',
            date1:'',
            have:true,
            none:'',
            vicefilename:'',
            maindepartment:'常善科技',
            mainpeople:'常善科技，2020-12-23',
            about0:`常善科技笔试题目:1.使用vue编写，将需要填写的部分需要做数据绑定，与日期有关的需要弹时间的选择窗口可以使用<input type=”date”>或者其他2.将excel页面化，要求保持原有的页面样式！！！！！...`,
            about1:'',
            about2:'',
            about3:'',
            about4:'',
            about5:'',
            departmentnumber0:'2',
            departmentnumber1:'3',
            departmentnumber2:'',
            departmentnumber3:'',
            judgepeople0:'',
            judgepeople1:'',
            judgepeople2:'',
            judgepeople3:'常善科技,2020-12-23',
            judgepeoplex:'',
            judgepeoplexs:'',
            isok:true,
            havemodify:'',
            ifothers:true,
            others:'some other things',
            signdate:'',
            signdate0:'',
            judgepeoplefinal:'常善科技',
            judgepeoplexsfinal:'常善科技,2020-12-23',
        }
    };
    var objprase=JSON.stringify(obj);
    res.send(obj);
});
app.post('/',(req,res)=>{
    let temp=false;
    var postmsg = '';
        req.on('data', function (chunk) {
            postmsg += chunk;
        });
        req.on('end', function () {
            try {
                jsonStr = JSON.parse(postmsg);
                console.log(jsonStr);
            } catch (err) {
                jsonStr = null;
                temp=true;
                console.log("something wrong happened");
            }finally{
                if(!temp)
                    res.send("服务端接收参数成功");
            }
            if(temp)
                res.sendStatus(404).send("失败");
        });
});
app.listen(3000);