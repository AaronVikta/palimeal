import axios from 'axios'
//receives the form containing comma seperated meal IDS
exports.sort_meals_demo =  function(req, res, error){

    //grab and split the IDs from the form sent by the user
    let meal_ids = req.body.meal_ids
    var meal_array = meal_ids.split(",")

    //make sure the array is not empty
    if(meal_array.length > 0){

        //create an array to hold the different Meal IDs and number of ingerdients to be returned
        var meals_array=[]
        var meals_object_array=[]

        //make an API call on each of the IDs
        for (let index = 0; index < meal_array.length; index++){
        
            axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ meal_array[index])
            .then( (response)=> {
                var ingredient_count = 0;
                //check if the ID returns a meal
                if( response.data.meals != null){
                    //count the ingredents needed for the meal 
                    response.data.meals.forEach(meal => {
                        for (let index = 1; index < 21; index ++) {
                           
                            let strIngredient = 'strIngredient'+ index.toString()
        
                            if(meal[strIngredient] != "" && meal[strIngredient] != null){
                                
                                //count as a valid ingredient
                                ingredient_count = ingredient_count + 1
                    
                            }
                            
                        }
                        
                    });

                    //add this ingredient count and ID to an array
                    let meal_id = meal_array[index];
                    let  meal_object = {
                        meal_id:meal_id,
                        ingredient:ingredient_count
                    }
                    meals_array.push(ingredient_count)
                    meals_object_array.push(meal_object)


                }  
            })
            .catch( (error)=> {
                console.log(error);
            });
                    
        }

        //sort the meals to get one with least ingredient
        setTimeout(function(){

            var sorted_array = meals_array.sort(function(a, b){return a - b});

            meals_object_array.forEach(meal => {

                if(meal.ingredient == sorted_array[0]){

                    //since the meal ID with the least ingredients have been gotten,
                    //make another call to get its details
                    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ meal.meal_id)
                    .then((response)=>{

                        res.render( 'demo_meals', {meal: response.data.meals})
                    })
                    .catch( (error)=> {
                        console.log(error);
                    });
                   
                }

            });
           
        }, 8000)
        
    }
    else{

        res.send({
            status: 200,
            message:"Please fill the fields"
        })
    }



}