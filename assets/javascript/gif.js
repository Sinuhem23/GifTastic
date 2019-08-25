// arrays of cars
var cars = ["Mustang","Tesla","Camaro","Challenger","Ferrari","Lamborghini","Mclaren","Ford GT","Porsche","Aston Martin"];



// displayCarInfo function re-renders the HTML to display the proper content
function displayCarInfo() {

    var car = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=lVX2szWqWpq4D5Zrcujk3MkqacAtJp7F&limit=10";

 // An AJAX call for the specific car button being clicked

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response.data[0].images.original.url);

    for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].images.original.url);
        var imgURL = response.data[i].images.original.url;

         // // Element to hold the Image
        var image = $("<img>").attr(
            {src: imgURL, 
            style: "width=400px; display:block; margin:auto; margin-top:10px"}
        );


        // // Appending the Image
        $("#cars-view").append(image);
    };
    



    });
}




// Function for displaying car data
function renderButtons() {

    // Deleting the cars prior to adding new cars/ avoid repeat buttons
    $("#buttons-view").empty();


    // Looping through the array of cars
    for ( var i = 0; i < cars.length; i ++) {

        // Buttons for car in array
            var a = $("<button>");
            // Adding a class of car-btn to Button
            a.addClass("car-btn");
            // Adding a data-attr
            a.attr("data-name", cars[i]);
            // Initial button text
            a.text(cars[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
         }
    }

    // Handles events where a car button is clicked
    $("#add-car").on("click", function(event){
            event.preventDefault();
            
            
    // Grabs the input from the textbox
            var car = $("#car-input").val().trim();

     // Adding car from the textbox to array
            cars.push(car);

    // Calling the renderButtons which handles the processing of our car array
    renderButtons();

    });
    
    
    // Adding a click even listener to all elements with a class of "car-btn"
    $(document).on("click", ".car-btn", displayCarInfo);

    // Calling the renderButtons function to display the intial buttons
renderButtons();















