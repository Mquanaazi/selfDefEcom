import express from 'express'
import productsRoutes from './routes/productsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import cors from "cors";

const app=express()
let port=process.env.PORT
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/products',productsRoutes)
app.use( '/users',usersRoutes)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    
    console.log('http://localhost:' +port)
})