$(document).ready(function() {

	var xhr = new XMLHttpRequest();

	xhr.onload = function() {

		var jsonResponse = JSON.parse(xhr.responseText);
		console.log(jsonResponse);

		for (var i = 0; i < jsonResponse.events.length; i++){
			console.log(jsonResponse.events[i].location);

			output = "<div class='stuff'>" + "<img src='" + jsonResponse.events[i].map + "'>" + "<p>" + jsonResponse.events[i].location + "</p>" + "<p>" + jsonResponse.events[i].date + "</p>" + "</div>";
			$("#content").append(output);

			// output = "<p>" + jsonResponse.events[i].location + "</p>";
			// $("#content").append(output);

			// output = "<p>" + jsonResponse.events[i].date + "</p>";
			// $("#content").append(output);
		}
	}

	xhr.open("GET", "data/data.json", true);
	xhr.send(null);

});