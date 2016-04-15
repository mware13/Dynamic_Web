// var main = function () {
// 	"use strict";

// // 	$(".tabs a:nth-child(1)".on("click", function () {
// // 		$(".tabs span").removeClass("active");
// // 		$(".tabs a:nth-child(1) span").addClass("active");
// // 		$("main .content").empty();
// // 		return false;
// // 	});

// // 	$(".tabs a:nth-child(2)".on("click", function () {
// // 		$(".tabs span").removeClass("active");		
// // 		$(".tabs a:nth-child(2) span").addClass("active");
// // 		$("main .content").empty();
// // 		return false;
// // 	});

// // 	$(".tabs a:nth-child(3)".on("click", function () {
// // 		$(".tabs span").removeClass("active");		
// // 		$(".tabs a:nth-child(3) span").addClass("active");
// // 		$("main .content").empty();
// // 		return false;
// // 	});
	

// 	// var makeTabActive = function (tabNumber) {
// 	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
// 	// 	$(".tabs span").removeClass("active");
// 	// 	$(tabSelector).addClass("active");
// 	// 	$("main .content").empty();
// 	// };

// 	// $(".tabs a:nth-child(1)").on("click", function () {
// 	// 	makeTabActive(1);
// 	// 	return false;
// 	// });

// 	// $(".tabs a:nth-child(1)").on("click", function () {
// 	// 	makeTabActive(1);
// 	// 	return false;
// 	// });

// 	// $(".tabs a:nth-child(2)").on("click", function () {
// 	// 	makeTabActive(2);
// 	// 	return false;
// 	// });

// 	// $(".tabs a:nth-child(3)").on("click", function () {
// 	// 	makeTabActive(3);
// 	// 	return false;
// 	// });


// 	// var tabNumber;

// 	// for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
// 	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber ") span";
// 	// 	$(tabSelector).on("click", function (event) {
// 	// 		$(".tabs span").removeClass("active");
// 	// 		$(event.target).addClass("active");
// 	// 		return false;
// 	// 	});
// 	// }

	
// 	// $(".tabs span").toArray().forEach(function (element) {
// 	// 	$(element).on("click", function () {
// 	// 		$(".tabs span").removeClass("active");
// 	// 		$(element).addClass("active");
// 	// 		$("main .content").empty();
// 	// 		return false;
// 	// 	});
// 	// });

// 	// //test whether the parent of the $me jQuery object
// 	// //is the first child of its parent
// 	// if ($me.parent().is(":first-child")) {
// 	// 	console.log("MY PARENT IS A FIRST CHILD");
// 	// } else {
// 	// 	console.log("my parent is not a first child");
// 	// }


// 	// var toDos = [
// 	// 	"Finish tutorials",
// 	// 	"Take Gracie to the park",
// 	// 	"Answer emails",
// 	// 	"Prep for Monday's class",
// 	// 	"Make up some new ToDos",
// 	// 	"Get Groceries"
// 	// ];

// 	// $(".tabs span").toArray().forEach(function (element) {
// 	// 	$(element).on("click", function () {
// 	// 		var $element = $(element);

// 	// 		$(".tabs span").removeClass("active");
// 	// 		$element.addClass("active");
// 	// 		$("main .content").empty();

// 	// 		if ($element.parent().is(":nth-child(1)")) {
// 	// 			console.log("FIRST TAB CLICKED");
// 	// 		} else if ($element.parent().is(":nth-child(2)")) {
// 	// 			console.log("SECOND TAB CLICKED");
// 	// 		} else if ($element.parent().is(":nth-child(3)")) {
// 	// 			console.log("THIRD TAB CLICKED");
// 	// 		}
// 	// 		return false;
// 	// 	});
// 	// });
// }

// $(document).ready(main);

var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);