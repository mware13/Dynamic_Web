window.onload = function() {

	document.getElementById("calculate").onclick = calculatePledge;

	function calculatePledge() {

	var num1 = document.getElementById("value1").value;
	var num2 = document.getElementById("value2").value;
	var result = num1 * num2;

	var text;

	if (result > 1000) {
		text = "Hey, big spender!";
	} else if (result > 100) {
		text = "Thanks mang.";
	} else {
		text = "Every bit counts!";
	}

	document.getElementById("calculation").innerHTML = "$" + result + " (" + text + ")";

	}

	function moodCalc() {

	var happy = ":)";
	var nervous = ":|";
	var rad = ";D";
	var mood = document.getElementById("mood");

	document.getElementById("happy").onmouseover = moodCalc {
		mood.innerHTML = happy;
		mood.style.color = "orange";
	};

	document.getElementById("nervous").onmouseover = moodCalc {
		mood.innerHTML = nervous;
		mood.style.color = "red";
	};

	document.getElementById("rad").onmouseover = moodCalc {
		mood.innerHTML = rad;
		mood.style.color = "green";
	};
}
}