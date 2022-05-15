import express from "express";
const app = express()
const port = process.env.PORT || 5000





app.get('/' , (req ,res)=>{
    res.send("hello slack")
})




/* == server == */

app.listen(port,()=>{
    console.log(`server is Running ${port}`);
})