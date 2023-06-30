const app=require("./app");

const dotenv =require("dotenv");

//config malum kaise padega ki 4000 pe jaana isiliye dotenv
dotenv.config({path:"backend/config/config.env"});


app.listen(process.env.PORT,()=>{
    console.log('Server is Working on https://localhost:${process.env.PORT}')
})