const mysql=require("mysql");
const mydb=require("../config/dbconfig")

const userController={
    getUser(req,resp){
        let username=req.query.username || req.body.username;
        let pwd=req.query.pwd  || req.body.pwd;
        console.log(username,pwd)

        // sql -select *from t_user where username=req.query.username and password=req.query.pwd

        //1.创建一个连接对象
        let db=mydb.dbconfig()
        // const db=mysql.createConnection({
        //         host:"localhost",
        //         port:"3306",
        //         user:"root",
        //         password:"root",
        //         database:"excrise1"

        //     });
        //2.发起连接
        db.connect()

        //3.查询
            db.query("select * from t_user where username=? and pwd=?",
            [username,pwd],
            (err,data)=>{
                console.log(err);
                console.log(data);
                if(!err){
                    if(data.length>0){
                        // resp.send("登录成功")
                        resp.redirect("success.html")
                    }
                }else{
                    resp.send(err);
                }
            }
        )
    },

    addUser(req,resp){
        let username=req.query.username || req.body.username;
        let pwd=req.query.pwd  || req.body.pwd;
        /*1.创建一个连接对象*/
        const db=mysql.createConnection({
            host:"localhost",
            port:"3306",
            user:"root",
            password:"root",
            database:"excrise1"
        });

        //2.发起连接
        db.connect()

        //3.sql语句
        db.query("INSERT INTO t_user VALUES (?,?,?)",
            [null,username,pwd],
            (err,data)=>{
                console.log(err);
                console.log(data);
                if(!err){
                     resp.send("注册成功")

                }else{
                    resp.send(err);
                }
            })
    }
}


module.exports=userController