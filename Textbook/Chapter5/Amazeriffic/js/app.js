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


// var main = function (toDoObjects) {
//     "use strict";

//     var toDos = toDoObjects.map(function (toDo) {
//         return toDo.description;
//     });

//     $(".tabs a span").toArray().forEach(function (element) {
//         var $element = $(element);

//         // create a click handler for this element
//         $element.on("click", function () {
//             var $content,
//                 $input,
//                 $button,
//                 i;

//             $(".tabs a span").removeClass("active");
//             $element.addClass("active");
//             $("main .content").empty();

//             if ($element.parent().is(":nth-child(1)")) {
//                 // newest first, so we have to go through
//                 // the array backwards
//                 $content = $("<ul>");
//                 for (i = toDos.length-1; i >= 0; i--) {
//                     $content.append($("<li>").text(toDos[i]));
//                 }
//             } else if ($element.parent().is(":nth-child(2)")) {
//                 // oldest first, so we go through the array forwards
//                 $content = $("<ul>");
//                 toDos.forEach(function (todo) {
//                     $content.append($("<li>").text(todo));
//                 });
//             } else if ($element.parent().is(":nth-child(3)")) {
//                 // tags tab
//                 console.log("tags tab");

//                 // var organizedByTag = [
//                 //     {
//                 //         "name": "shopping",
//                 //         "toDos": ["Get groceries"]
//                 //     },
//                 //     {
//                 //         "name": "chores",
//                 //         "toDos": ["Get groceries", "Take Gracie to the park"]
//                 //     },
//                 // ];

//                 var organizedByTag = organizedByTag(toDoObjects);

//                 organizedByTag.forEach(function (tag) {
//                     var $tagName = $("<h3>").text(tag.name),
//                         $content = $("<ul>");

//                     tag.toDos.forEach(function (description) {
//                         var $li = $("<li>").text(description);
//                         $content.append($li);
//                     });

//                     $("main .content").append($tagName);
//                     $("main .content").append($content);
//                 });
//             } else if ($element.parent().is(":nth-child(4)")) {
//                 // input a new to-do
//                 $input = $("<input>"),
//                 $button = $("<button>").text("+");

//                 $button.on("click", function () {
//                     if ($input.val() !== "") {
//                         toDos.push($input.val());
//                         $input.val("");
//                     }
//                 });

//                 $content = $("<div>").append($input).append($button);
//                /* Alternatively append() allows multiple arguments so the above
//                 can be done with $content = $("<div>").append($input, $button); */
//             }

//             $("main .content").append($content);

//             return false;
//         });
//     });

//     $(".tabs a:first-child span").trigger("click");
// };

var main = function (toDoObjects) {
    "use strict";

    var toDos = toDoObjects.map(function (toDo) {
          // we'll just return the description
          // of this toDoObject
          return toDo.description;
    });

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
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
                var tags = [];

                toDoObjects.forEach(function (toDo) {
                    toDo.tags.forEach(function (tag) {
                        if (tags.indexOf(tag) === -1) {
                            tags.push(tag);
                        }
                    });
                });
                console.log(tags);

                var tagObjects = tags.map(function (tag) {
                    var toDosWithTag = [];

                    toDoObjects.forEach(function (toDo) {
                        if (toDo.tags.indexOf(tag) !== -1) {
                            toDosWithTag.push(toDo.description);
                        }
                    });

                    return { "name": tag, "toDos": toDosWithTag };
                });

                tagObjects.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");


                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });

            } else if ($element.parent().is(":nth-child(4)")) {
                var $input = $("<input>").addClass("description"),
                    $inputLabel = $("<p>").text("Description: "),
                    $tagInput = $("<input>").addClass("tags"),
                    $tagLabel = $("<p>").text("Tags: "),
                    $button = $("<button>").text("+");

                $button.on("click", function () {
                    var description = $input.val(),
                        tags = $tagInput.val().split(",");
                                 
                    toDoObjects.push({"description":description, "tags":tags});

                    // update toDos
                    toDos = toDoObjects.map(function (toDo) {
                        return toDo.description;
                    });

                    $input.val("");
                    $tagInput.val("");
                });

                $content = $("<div>").append($inputLabel)
                                     .append($input)
                                     .append($tagLabel)
                                     .append($tagInput)
                                     .append($button);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});