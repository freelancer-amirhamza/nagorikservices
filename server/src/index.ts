import app from "./server";

const port = 4000;


app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})