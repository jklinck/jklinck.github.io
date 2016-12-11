$(document).ready(function(){
	$('.navbar-collapse').on('click',function(e){
	    if($(e.target).is('a')){
	        $(this).collapse('hide');
	    };
    });
    var date = new Date();
    $("#year").html(date.getFullYear());
});

