const express= require ('express');
require.apply("dotenv").config();
const app= express();
const dashRouter=require('/router/dashRouter')
app.use(cors());


app.listen(process.env.port,()=>{
    console.log('server is up and running in ${process.env.port}');
});


