
$(document).ready(function(){
$("#getMessage").click(function() {
 
 $("button").addClass("animated zoomOut");
 


 $.ajax({
  method: "GET",
  url: "https://quotes.rest/qod.json"
})
  .done(function( res ) {
    console.log( "Data Saved: ", res.contents.quotes[0].quote );
    $(".message").html(res.contents.quotes[0].quote  );
  })


});
});

