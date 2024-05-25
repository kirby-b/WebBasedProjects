function randFunc() {
	let min = parseInt(document.getElementsByClassName("min")[0].value);
	let max = parseInt(document.getElementsByClassName("max")[0].value);

	let result = Math.floor(Math.random() * (max - min + 1)) + min;

	document.getElementById("result").innerHTML = result;
}