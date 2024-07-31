import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"

// app config
const app = express()
const port=4000

//middleware(frontend to bacend request)
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//request data from the server
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


