
$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;  
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
    $( "span" ).html("You are a SHIBA INU!");
  }
  if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
    $( "span" ).html("You are a CHIHUAHUA!") ;
  }
    
  if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
    $( "span" ).html("You are a FRENCH BULLDOG!");
  }
    
  if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
    $( "span" ).html("You are a GOLDEN RETRIEVER!");
  }
        
});
