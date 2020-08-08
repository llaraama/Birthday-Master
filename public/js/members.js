$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

$(".nav-link").on("click", function(e){
  e.preventDefault();

  console.log("it clicked")
  //console.log($(this).text());
  //console.log(this); 
  $("#monthTitle").text($(this).text());
  $(".card").removeClass("hide");

  $.post(`/api/birthday/${$(this).val()}`,function(data){
    console.log("on the members page in post")
    console.log(data)
    renderToHTML(data)
  })

});

function renderToHTML(data){

  data.forEach(bday=>{
    let date=new Date(bday.date)
    let html=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${bday.firstname} ${bday.lastname}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${date.getFullYear()}</h6>
      <h1 class="card-text">${date.getUTCDate()}</h1>
     
    </div>
  </div>`

  $(".text-info").append(html)
  })
}



});

