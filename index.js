import express from 'express'
import cors from "cors";
import connection from './db/models/connectionDb.js';
import productRouter from './src/modules/product/product.routes.js';

const port=process.env.PORT ||3000
const app = express()
app.use(express.json())
app.use(cors())
app.use("/product",productRouter)

app.use("*",(req,res,next)=>{
res.send({msg:"404 not founded"})
})


app.listen(port, () => {
    console.log(`server is turn...`)
})