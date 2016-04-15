$(document).ready(function() {

	//Get stored data
	$.getJSON("data.json", function (dataObjects) {
        main(dataObjects);
    });

	//Custom Select Menu Plugin from here https://github.com/derekpcollins/jquery-custom-select-menu/blob/master/README.md
	$('select').customSelectMenu();

	$("#about_content").hide();

	$(".navbar_footer").hide();

	$("#inv_message").hide();

	$("#typography").hide();

	var wordObj = document.getElementById("word");
	if (wordObj.checkValidity() == true) {
		$("#inv_message").fadeOut();
	}

	$(".about").click(function(e) {
		e.preventDefault();
		$("#header_wrap").fadeIn(400);
		$(".view").click(function(e) {
			$(".content").fadeOut(400, function () {
				$("#typography").fadeIn(400);
				$(".navbar_footer").fadeIn(400);
			});
		});
		$("#main_form").fadeOut(400, function () {
			$(".content").animate({width: '700px'}, 400, function() {
				$("#about_content").fadeIn(400);
				$(".try").click(function(e) {
					e.preventDefault();
					$("#about_content").fadeOut(400, function () {
						$(".content").animate({width: '430px'}, 400, function() {
							$("#main_form").fadeIn(400);
						});
					});
				});
			});
		});
	});

	$(".home").click(function(e) {
		e.preventDefault();
		$("#header_wrap").fadeIn(400);
		$("#typography").fadeOut(400);
		$(".navbar_footer").fadeOut(400);
		$("#about_content").fadeOut(400, function () {
			$(".content").animate({width: '430px'}, 400, function() {
				$("#main_form").fadeIn(400);
				$(".content").fadeIn(400);
			});
		});
	});

	$(".view").click(function(e) {
		e.preventDefault();
		$("#header_wrap").fadeOut(400);
		$("#main_form").fadeOut(400, function () {
			$("#typography").fadeIn(400);
			$(".navbar_footer").fadeIn(400);
		});
		$("#about_content").fadeOut(400);
		$(".content").fadeOut(400);
		$(".about").click(function(e) {
			$(".navbar_footer").fadeOut(400);
			$(".content").animate({width: '700px'}, 400, function() {
				$(".content").fadeIn(400);
				$("#about_content").fadeIn(400);
				$(".try").click(function(e) {
					e.preventDefault();
					$("#about_content").fadeOut(400, function () {
						$(".content").animate({width: '430px'}, 400, function() {
							$("#main_form").fadeIn(400);
						});
					});
				});
			});
		});
	});

	$("#enter").click(function(e) {
		e.preventDefault();
		if (wordObj.checkValidity() == true) {
			$("#inv_message").fadeOut();
			$("#inv_message").fadeOut();
			$("#header_wrap").fadeOut(400);
			$("#main_form").fadeOut(400, function () {
				$("#typography").fadeIn(400);
				$(".navbar_footer").fadeIn(400);
			});
			$("#about_content").fadeOut(400);
			$(".content").fadeOut(400);
			$(".about").click(function(e) {
				$(".navbar_footer").fadeOut(400);
				$(".content").animate({width: '700px'}, 400, function() {
					$(".content").fadeIn(400);
					$("#about_content").fadeIn(400);
					$(".try").click(function(e) {
						e.preventDefault();
						$("#about_content").fadeOut(400, function () {
							$(".content").animate({width: '430px'}, 400, function() {
								$("#main_form").fadeIn(400);
							});
						});
					});
				});
			});
		}
		if (wordObj.checkValidity() == false) {
			$("#inv_message").fadeIn();
		}
	});
 
	$("input[name=word]").keypress(function(key) {
		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode = 45)) return false;
	});

});


function main(dataObjects){

	function addAll() {

		$("#typography").empty();

		dataObjects.forEach(function(data) {

			//create containing div element
			var $div = $("<div>");
			$div.addClass("node");

			//create new h1 element with class and contentscf
			var $typeface;
			var $textsize;
			var $bold;
			var $italic;
			var $underline;
			var $word = $("<h1>");
			$word.addClass("word");
			$word.html(data.word);
			$word.css({"font-family": data.typeface, "font-size": data.textsize + "px", "font-weight": data.bold, "font-style": data.italic, "text-decoration": data.underline});

			//create new p element with class and contents
			// var $typeface = $("<h1>");
			// $typeface.addClass("typeface");
			// $typeface.html(data.word);
			// $typeface.css("font-family", data.typeface);

			$div.append($word);
			// $div.append($typeface);

			$("#typography").append($div);

		});

	}
	
	//run addAll function when page first loads (above)
	addAll();

	$("#enter").on("click", function(e) {
		e.preventDefault();

		//grab values from form
		var nodeWord = $("input[name=word]").val();
		var nodeTypeface = $("input[name=typeface]").val();
		var nodetextSize = $("input[name=textsize]").val();
		var nodeBold = $("input[name=boldin]:checked").val();
		var nodeItalic = $("input[name=italicin]:checked").val();
		var nodeUnderline = $("input[name=underlinein]:checked").val();

		console.log(nodeWord);
		console.log(nodetextSize);
		console.log(nodeBold);
		console.log(nodeItalic);
		console.log(nodeUnderline);

		function node(word, typeface, textsize, bold, italic, underline) {
			this.word = word,
			this.typeface = typeface,
			this.textsize = textsize,
			this.bold = bold,
			this.italic = italic,
			this.underline = underline
		}

		var newNode = new node(nodeWord, nodeTypeface, nodetextSize, nodeBold, nodeItalic, nodeUnderline);

		$.post("addData", newNode, function (result) {
            
            console.log(result);

            //Add new image to client-side array of objects
            dataObjects.push(newNode);

            //update the DOM
            addAll();
			
        });

	});
}