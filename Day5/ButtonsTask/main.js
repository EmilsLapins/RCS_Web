$(":button#first").click(function(){
    
    var btnClicked = $("p").html();
  
    if (btnClicked == "foo"){
        $("p").text("bar")
    } else {
        $("p").text("foo")
    }
    
    
 });

 $(":button#second").click(function(){
    
    var btnClicked = $(this).text();
 
    if (btnClicked == "Test"){
        $(":button#second").html("foo")
    } else if(btnClicked == "foo") {
        $(":button#second").html("bar")
    } else if (btnClicked == "bar"){
        $(":button#second").html("baz")
    }else {
        $(":button#second").html("foo")
    }
    
 });

