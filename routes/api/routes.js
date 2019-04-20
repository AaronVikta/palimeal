import express from 'express'
let router = express.Router()


//the first endpoint to handle, requests
router.get('/',(req,res)=>{
    res.render('index');
})

//endpoint to welcome the user and request for meal IDs
router.get('/meals',(req,res)=>{

    res.send({
        success:true,
        status:200,
        respnse:"Hello, Welcome to Pali Meals"
    })
   
})





//export the routes to index
module.exports = router