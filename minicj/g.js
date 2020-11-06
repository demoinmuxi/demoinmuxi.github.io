Vue.component('chou-jiang', {
    data:function() {
        return {
            text:"抽奖",
            fonts:"20px",
            texal:"center",
            linh:"200px"
        };
    },
    template:`
          <div class='s'>
          <h1 :style="{
            fontSize:fonts*3,
            textAlign:texal,
            lineHeight:linh/2,
            height:linh/2
        }">
          <slot>
          </slot>
          <slot name='p1'></slot>
          </h1>
          </div>
    `
});
var vm= new Vue({
    el:".w",
    data: {
        count:0,
        zj:0,
        prevent:0,
        temp:0,
        num:[0,1,2,3,5,7,14,13,12,11,6,4],
        text1:"抽奖",
        tt:"burlywood",
        cl1:"bord",
        inde:0,
        t:true,
        ind:0,
        timer:0,
        ss:[{
          'backgroundColor':'burlywood',
        },{

        }],
        
        list:[
          {img:'img/j1.png',title:'谢谢参与'},
          {img:'img/j2.png',title:'美女一个'},
          {img:'img/j1.png',title:'宝马一辆'},
          {img:'img/j2.png',title:'单车一辆'},
          {img:'img/j1.png',title:'鸡蛋一蓝'},
          {img:'img/j2.png',title:'500红包'},
          {img:'img/j1.png',title:'靓号一个'},
          {img:'img/j2.png',title:'鲜花一蓝'}
        ],
        map:[{n:"奖品为null"},{n:"奖品为'\0'"},{n:"奖品为NULL"},{n:"奖品为none"}],
        sty:{
            width:"80px",
            height:"80px",
            margin:"-5px 9px"
        },
        di:{
            width:"98px",
            textAlign:"center",
            heigt:"18px"
        }
        
    },
    methods:{
        cjj:function(){
            // if(this.prevent==0){
            //     this.prevent=1;
            //     return ;
            // }
            
            // clearInterval(this.timer)
            this.timer =  setInterval(() => {     
                this.inde=this.num[this.temp++]; 
                if (this.temp==12) {
                    this.temp=0;
                    }

            }, 300);
            // this.text1="即将揭晓";
            // setTimeout(() => {
            // this.text1="开始";
            // this.timer=0;
            // clearInterval(this.timer);
            // }, 1000);
            
            if (this.inde>=11) {
                alert("很遗憾 您抽到了"+this.map[this.inde-11].n+"的无奖项");
            }else{
                alert("恭喜您获得了"+this.list[this.inde].title);
            }
        },
        ht:function(){
        this.ind==0?this.ind=1:this.ind=0;
        if (!this.timer) {
            this.text1="停止";
            this.timer =  setInterval(() => {     
            this.inde=this.num[this.temp++]; 
            if (this.temp==12) {
                this.temp=0;
                }
        }, 100);
    }else{
        clearInterval(this.timer);
        // setTimeout(this.cjj(),900);
        // clearInterval(this.timer)
        this.text1="开始";
        this.timer=0;
        if (this.inde>=11) {
            this.count++;
            alert("很遗憾 您抽到了"+this.map[this.inde-11].n+"的无奖项");
            if (this.zj<=9) {
                v.reco[this.zj++].jiangp=this.map[this.inde-11].n;
                
                
            }else{
                this.zj=0;
                v.reco[this.zj++].jiangp=this.map[this.inde-11].n;
            }
            v.reco[this.zj-1].no=this.count;


        }else{
            this.count++;
            alert("恭喜您获得了"+this.list[this.inde].title);
            if (this.zj<=9) {
                v.reco[this.zj++].jiangp=this.list[this.inde].title;
            
            }else{
                this.zj=0;
                v.reco[this.zj++].jiangp=this.list[this.inde].title;
                

            }
            v.reco[this.zj-1].no=this.count;
        }
        
    }
}
    }
});
var v=new Vue({
    el:'.record',
    data:{
        reco:[
            {no:1,jiangp:''},
            {no:2,jiangp:''},
            {no:3,jiangp:''},
            {no:4,jiangp:''},
            {no:5,jiangp:''},
            {no:6,jiangp:''},
            {no:7,jiangp:''},
            {no:8,jiangp:''},
            {no:9,jiangp:''},
            {no:10,jiangp:''}]
    }
});