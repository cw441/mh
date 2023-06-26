const express = require ('express');
const router = express.Router();
const Usert = require('../modules/techer1');
const Userm = require('../modules/eroq');
const Userq = require('../modules/jdwl');
const Userj = require('../modules/mlzm');
const Userw = require('../modules/news');






///////////////post data////////////////////////
router.post('/add1', async(req , res)=>{
try{
data= req.body;
usr = Usert(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get1', async(req , res)=>{
try{
users =await Usert.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////delet/////////////////////
router.delete('/delet1/:id', async(req , res)=>{
 try{
 id = req.params.id
 deleteUser = await Usert.findByIdAndDelete({_id: id});
 res.send(deleteUser)
 }catch(error)
 {
 res.send(error)
 }
 })
 /////////////////update data//////////////////////
 router.put('/upt1/:id',async(req,res)=>{
 try{
 id=req.params.id;
 newData = req.body;
 updated= await Usert.findByIdAndUpdate({_id: id}, newData);
 res.send(updated);
 }catch(error){
 res.send(error)}
 })
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////post data////////////////////////
router.post('/add2', async(req , res)=>{
try{
data= req.body;
usr = Userw(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get2', async(req , res)=>{
try{
users =await Userw.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////delet/////////////////////
router.delete('/delet2/:id', async(req , res)=>{
 try{
 id = req.params.id
 deleteUser = await Userw.findByIdAndDelete({_id: id});
 res.send(deleteUser)
 }catch(error)
 {
 res.send(error)
 }
 })
 /////////////////update data//////////////////////
 router.put('/upt2/:id',async(req,res)=>{
 try{
 id=req.params.id;
 newData = req.body;
 updated= await Userw.findByIdAndUpdate({_id: id}, newData);
 res.send(updated);
 }catch(error){
 res.send(error)}
 })

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 ///////////////post data////////////////////////
 router.post('/add3', async(req , res)=>{
 try{
 data= req.body;
 usr = Userm(data);
 savedUser = await usr.save();
 res.status(200).send(savedUser)

 }
 catch(error)
 {
 res.status(400).send(error)
 }

 })

 ////////////////////get data////////////////////
 router.get('/get3', async(req , res)=>{
 try{
 users =await Userm.find();
 res.status(200).send(users);

 }catch (error){
 res.status(400).send(error)
 }
 }
 )
 ////////////////delet/////////////////////
 router.delete('/delet3/:id', async(req , res)=>{
  try{
  id = req.params.id
  deleteUser = await Userm.findByIdAndDelete({_id: id});
  res.send(deleteUser)
  }catch(error)
  {
  res.send(error)
  }
  })
  /////////////////update data//////////////////////
  router.put('/upt3/:id',async(req,res)=>{
  try{
  id=req.params.id;
  newData = req.body;
  updated= await Userm.findByIdAndUpdate({_id: id}, newData);
  res.send(updated);
  }catch(error){
  res.send(error)}
  })
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   ///////////////post data////////////////////////
   router.post('/add4', async(req , res)=>{
   try{
   data= req.body;
   usr = Userj(data);
   savedUser = await usr.save();
   res.status(200).send(savedUser)

   }
   catch(error)
   {
   res.status(400).send(error)
   }

   })

   ////////////////////get data////////////////////
   router.get('/get4', async(req , res)=>{
   try{
   users =await Userj.find();
   res.status(200).send(users);

   }catch (error){
   res.status(400).send(error)
   }
   }
   )
   ////////////////delet/////////////////////
   router.delete('/delet4/:id', async(req , res)=>{
    try{
    id = req.params.id
    deleteUser = await Userj.findByIdAndDelete({_id: id});
    res.send(deleteUser)
    }catch(error)
    {
    res.send(error)
    }
    })
    /////////////////update data//////////////////////
    router.put('/upt4/:id',async(req,res)=>{
    try{
    id=req.params.id;
    newData = req.body;
    updated= await Userj.findByIdAndUpdate({_id: id}, newData);
    res.send(updated);
    }catch(error){
    res.send(error)}
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


       ///////////////post data////////////////////////
       router.post('/add5', async(req , res)=>{
       try{
       data= req.body;
       usr = Userq(data);
       savedUser = await usr.save();
       res.status(200).send(savedUser)

       }
       catch(error)
       {
       res.status(400).send(error)
       }

       })

       ////////////////////get data////////////////////
       router.get('/get5', async(req , res)=>{
       try{
       users =await Userq.find();
       res.status(200).send(users);

       }catch (error){
       res.status(400).send(error)
       }
       }
       )
       ////////////////delet/////////////////////
       router.delete('/delet5/:id', async(req , res)=>{
        try{
        id = req.params.id
        deleteUser = await Userq.findByIdAndDelete({_id: id});
        res.send(deleteUser)
        }catch(error)
        {
        res.send(error)
        }
        })
        /////////////////update data//////////////////////
        router.put('/upt5/:id',async(req,res)=>{
        try{
        id=req.params.id;
        newData = req.body;
        updated= await Userq.findByIdAndUpdate({_id: id}, newData);
        res.send(updated);
        }catch(error){
        res.send(error)}
        })










        module.exports = router;