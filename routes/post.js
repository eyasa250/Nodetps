const express =require ('express');
const router = express.Router();
router.get('/all',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"ee"} ])
})
//router.get('/:id',(req,res)=>{
 //   res.send({id:1,name:"sachin"})
//})
module.exports=router;