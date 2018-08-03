$('#save-task').click(function () {
    var data = {
        content: $("#task-title").val(),
        done: false
    };
    $.ajax({
        url: 'http://localhost:8080/todo',
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            loadData();
        }
    })
});

$(document).on("click", "#tasks li span", function () {
    if ($(this).parent().hasClass("line-through")) {
        $(this).parent().removeClass("line-through")
    } else {
        $(this).parent().addClass("line-through")
    }
    var id = $(this).parent().find("button").attr("data-id");
    var data = {
        content: $(this).parent().find("span").text(),
        done: ($(this).parent().hasClass("line-through"))
    };
    $.ajax({
        url: 'http://localhost:8080/todo/' + id,
        type: "PATCH",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            loadData();
        }
    })
});

$(document).on("click", "#tasks li .delete-item", function (event) {
    event.stopPropagation();
    var id = $(this).attr("data-id");
    $(this).parent().remove();
    $.ajax({
        url: 'http://localhost:8080/todo/' + id,
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
    })
});


// 

$(document).ready(function () {
    $.getJSON("http://localhost:8080/todo/all", function (data) {

        loadData();

        

    });

});


function loadData() {

    $.getJSON("http://localhost:8080/todo/all", function (data) {
        $("#tasks").html("");   
        for (var index = 0; index < data.length; index++) {
                
            var element = data[index];
            var $el = $("<li>");
            if (element.done == true){
                $el.addClass("line-through");
            }
            $el.html("<span>" + element.content +"<span>");

            var $delete = $("<button>");
            $delete.addClass("delete-item");
            $delete.text("Dzest");
            $delete.attr("data-id", element.id);
            
            $el.append($delete);
            $("#task-title").val('');

            $("#tasks").append($el);



        }

    });

}