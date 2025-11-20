const app = require("./app.ts")
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const express, {Request, Response} = require("express")





app.get("/", (req: Request, res: Response) => {
    res.send(`<center><h1>server is running successfully!</h1>
        <br/> <h1>Welcome to nagorik service server site!</h1></center>`)
});

app.listen(PORT, async(req:Request,res:Response)=>{
    console.log(`server is running at http://localhost:${PORT}`);
})

