import app from "./app"
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;


app.get("/", (req,res)=>{
    res.send(`<center><h1>Welcome server site!</h1></center>`)
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});