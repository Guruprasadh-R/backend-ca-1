const express=require("express");
const app=express();
const port=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server running sucessfully");
});

app.post("/signup",(req,res)=>{
    const{ username,email,password,dateofbirth}=req.body;

    if(!username){
        return res.status(400).json({error:"username cannot be empty"});
    }
    if(!email){
        return res.status(400).json({error:"email cannot be empty"});
    }
    if(!password){
        return res.status(400).json({error:"password cannot be empty"});
    }
    if(!dateofbirth){
        return res.status(400).json({error:"dateofbirth cannot be empty"});
    }
});

app.listen(port,()=>{
    console.log(`server sucessfully running on http://localhost:${port}`);
});

