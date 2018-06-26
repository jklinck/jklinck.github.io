$(document).ready(function(){
	$('.navbar-collapse').on('click',function(e){
	    if($(e.target).is('a')){
	        $(this).collapse('hide');
	    };
    });
    var date = new Date();
    $("#year").html(date.getFullYear());

    $.ajax({
    	url:"img/laptop-min.jpg",
    	type: 'GET',
    	headers: {
    		"Cache-Control":"max-age=456"
    	}
    });
});

