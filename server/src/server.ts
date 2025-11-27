import  express  from 'express';

const app = express();


app.get("/", (req,res)=>{
    res.send("<center><h1>Welcome to server site!</h1> </center>")
})

export default app;