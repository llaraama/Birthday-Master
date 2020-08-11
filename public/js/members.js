
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  
  $(".nav-link").on("click", function(e){
    e.preventDefault();
    $("#bday-card").empty();
    $("#monthTitle").text($(this).text());
    $(".card").removeClass("hide");
    
    location.href = `/api/birthday/${$(this).val()}`
  });

});

