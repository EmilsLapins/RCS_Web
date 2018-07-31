// function changeText() 
// {
//     var element = document.getElementById("ice-cream-text");
//     element.innerText = "Saldejums!!!";
//     element.style.background = "#0000FF";
// }

// document 
// .getElementById("click-me-button")
// .addEventListener("click", changeText);

// document
// .getElementById("ice-cream-text")
// .addEventListener("mouseover", function(){
//     var element = document.getElementById("ice-cream-text");
//     element.innerText = "Saldejums!!!";
//     element.style.background = "#00FFFF";
// });

document.querySelector("button")
    .addEventListener('click', function () {
        var elements = document.querySelectorAll(".ice-cream-text");

        for (let index = 0; index < elements.length; index++) {
            var element = elements[index];

            element.innerText = "Saldejums!!!";
            element.style.background = "#0000FF";
        }


    });

// document
// .querySelector("#add-ice-cream")
// .addEventListener("click", function(){
//     var element = "<span>Ice cream with bacon!</span><br>";
//     document.querySelector("#freezer").innerHTML += element;

// });
var iceCreamCount = 0;

$("#add-ice-cream")
    .click(function () {
        
        var element = $("<img>");
       
        element.attr("src", "https://png.pngtree.com/element_pic/29/03/20/1656fa474be339d.jpg");
        element.css("display", "block");
        element.css("height", "100px")
        $("#freezer").append(element);
        element.draggable({
            revert: "invalid"
        });
        // Added ice cream count!
        iceCreamCount++;
        console.log(iceCreamCount);
        $("div.iceCreamCount").text("Ice cream count: " + iceCreamCount);
    });

$("#hand img").droppable({
    drop: function (event, ui) {
        
        ui.draggable.fadeOut(1000);
        // Added ice cream count!
        iceCreamCount--;
        console.log(iceCreamCount);
        $("div.iceCreamCount").text("Ice cream count: " + iceCreamCount);
    }
});

// $(document).on("click","#freezer img", function(){
//     $(this).fadeOut(1000);
// });

$("freezer img").draggable();

// Homework
// Skaits cik saldejumi apesti !

// Cik saldejumi saldetava!

