require("dotenv").config();
const express= require("express");
const fundRoutes= require("./routes/fundRoutes");
const app=express();
const PORT=process.env.PORT;

app.use("/api/funds",fundRoutes);

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