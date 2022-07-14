const express=require("express");

const userController=require("../controller/userController")

const router=express.Router();    //调用express对象提供的路由方法，返回路由对象


router.get("/login.do",userController.getUser)
router.post("/login.do",userController.getUser)
router.post("/reg.do",userController.addUser)


module.exports=router;    //公开路由文件