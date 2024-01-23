function randFunc() {
	var min = parseInt(document.getElementsByClassName("min")[0].value);
	var max = parseInt(document.getElementsByClassName("max")[0].value);

	var result = Math.floor(Math.random() * (max - min + 1)) + min;

	document.getElementById("result").innerHTML = result;
}