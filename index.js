const express = require('express');
// const passport = require('passport')  
const app = express();

const port =4000;
app.set("view engine","ejs" )
app.get('/', (req, res) => {
    res.render("pages/index")
})
app.get('/google',(req,res)=>{

})
app.listen(port,()=>{
    console.log('Server created')
})