import express from 'express'
//import controllers for contestable year
import mealController from '../../controllers/mealController';
import demo_mealController from '../../controllers/demo_mealController';

let router = express.Router()


//the endpoint for the landing pages
router.get('/',(req,res)=>{
    res.render('index');
})

//the end  point for demo landing page
router.get('/demo',(req,res)=>{
    res.render('demo');
})

//endpoint to receive meal IDs and sort them according to ingredients
router.post('/api/meals', mealController.sort_meals);
router.post('/api/demo_meals', demo_mealController.sort_meals_demo)


//export the routes to index
module.exports = router