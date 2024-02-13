const express =require ('express');
const router = express.Router();
router.get('/login',(req,res)=>{
    // res.send("<h1>hello world</h1>")
    //send accepte html , string , json
   res.send("<h1>login page</h1>")
})

router.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/auth.html')})
module.exports=router;
