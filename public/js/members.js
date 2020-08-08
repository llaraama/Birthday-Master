$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  
$(".nav-link").on("click", function(e){
  e.preventDefault();

  //console.log($(this).text());
  //console.log(this); 
  $("#monthTitle").text($(this).text());
  $(".card").removeClass("hide");

  $.post(`/api/birthday/${$(this).val()}`).then(data => {
    //console.log(data);
    //console.log(data.birthday);
    //console.log(data[0].birthday.dataValues.firstname);
    $(".text-info").append(
    `<div class=card>
      <h5>Test</h5>
    </div>`
    )
  });
});
});

