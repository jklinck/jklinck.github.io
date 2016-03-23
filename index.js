$(document).ready(function(){
	$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    };
    });
});

window.onload=function(){
	var date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
}






