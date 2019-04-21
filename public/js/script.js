$(function () {
    // When the user clicks this input, get all the tyre brands avaliable
    $('.search').click(function (e) {

        e.preventDefault();

       if($('.meal_ids').val() == ""){
           alert('Please enter a meal ID Eg: 23782')
       }
       else{

        $.ajax({
            type: 'post',
            url: '/api/demo_meals',
            data: JSON.stringify({ meal_ids: $('.meal_ids').val()} ),
            contentType: 'application/json',

            beforeSend: function(){
                $('.loading').show();
              },
            complete: function(){
                $('.loading').hide();
            },

            success: function(data) {
                $('.callbacks_container').hide();
                $('.navbar').hide();
                $('#some').show();
                
                data.meal.forEach(meal => {
                    $('.agile-wthree-works').css("background-image", "url("+meal.strMealThumb+")"); 
                    $('.meal_name').text(meal.strMeal);
                    $('.meal_id').text(meal.idMeal);
                    $('.category').text(meal.strCategory);
                    $('.button-w3ls').attr("href", meal.strYoutube);
                    $('.prepare').text(meal.strInstructions);
                    
                });
            },
            
           
        })
       }

     

    });

});