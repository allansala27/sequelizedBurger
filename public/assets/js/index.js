$(document).ready(function() {
	//when burgur is added
	$("#burger-submit").on("click", function(event) {
    	event.preventDefault();
    	var newBurger = $("#new-burger-input").val();
    	addBurger(newBurger);
    });

    // $("#eat-burger").on("click", function(event) {
    // 	event.preventDefault();

    // })

    function addBurger(newbie) {
    	$.post('/burgers/create', {
    		name: newbie,
    		devoured: false
    	}).then(function(){
    		console.log("Burger added!")
    	});
    };	
});    