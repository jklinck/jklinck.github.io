$(document).ready(function(){
	// $('.navbar-collapse').on('click',function(e){
	//     if($(e.target).is('a')){
	//         $(this).collapse('hide');
	//     };
 //    });
    // var date = new Date();
    // $("#year").html(date.getFullYear());
});

// var drop=document.querySelector(".drpDn");
// drop.addEventListener("click",function(){

// })

var iconBar=document.querySelector(".icon-bar");
var dropDown=false;
var about = document.querySelector(".drpDn");
iconBar.addEventListener("click",function(){
	if(dropDown===false){
		about.display="inline-block";
		dropDown=true;
	}
	else{
		about.display="none";
		dropDown=false;
	}
});

var navBar = document.getElementById("navBar");
about.addEventListener("click",function(){
	about.display="none";
})


var date = new Date();
var newYear = date.getFullYear();
document.getElementById("year").innerHTML=newYear;










