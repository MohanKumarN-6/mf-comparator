const express= require("express");
const app=express();
const PORT=5000;

app.get("/",(req,res)=>{
    res.json(
        {
         message: "Mutual Fund Comparator API Running"
        }
    )

})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})