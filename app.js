
const express=require("express");  //引入express
const app=express();  //执行express全局函数,返回服务器对象

//搭建任务日志的模块   npm install morgan --save
const logger=require("morgan");    //引入日志模块
//搭建图标的模块   npm install serve-favicon --save
const favicon=require("serve-favicon");
//引入自己写的路由模块
const route=require("./routes/indexRouter");
//POST请求模块
const bodyParser=require("body-parser");



//使用日志模块，放在配置之前
app.use(logger("dev"));    //调用日志配置为开发模式
//使用小图标模块，放在配置之前
app.use(favicon(__dirname+"/public/images/faico.ico"));
//使用POST请求
//配置post请求必须写在路由上方
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//使用自己写的路由模块
app.use(route);






//    配置
app.use(express.static(__dirname+"/public"));         //请求静态资源在public找 路径的配置
app.use(express.static(__dirname+"/public/html"));  

app.listen(8888,()=>{     //监听端口搭建服务器
    console.log("服务启动了");
})


console.log(app);
