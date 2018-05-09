var button = document.getElementById("logo-responsive");
var menu = document.getElementById("aside");

function displayOk() {
    menu.style.display = "block";
	menu.style.position = "absolute";
	menu.style.zIndex = "1500";
	menu.style.width = "45%";
	console.log("clic");
}

button.addEventListener("click", displayOk);


/*var button = document.getElementById("logo-responsive");
var menu = document.getElementById("aside");

function displayOk() {
    menu.style.display = "block";
	menu.style.zIndex = "200";
	console.log("clic");
}

button.addEventListener("click", function() {
    displayOk;
});*/