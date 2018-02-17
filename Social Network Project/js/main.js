var times = document.getElementsByClassName("times")[0];
var side = document.getElementsByClassName("fourth-sd")[0];
times.addEventListener("click", closeContent , false);

function closeContent (){
	side.style.display = "none";
}