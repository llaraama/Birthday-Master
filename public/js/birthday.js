// const { Console } = require("console");

$(document).ready(() => {

    const birthdayForm= $("form.info");
    const firstNameInput= $("input#fname");
    const lastNameInput=$("input#lname");
    const dateInput=$("input#date");
    const giftInput=$("input#gift");


    birthdayForm.on("submit",event=>{
        event.preventDefault();
        const birthdayData={
            firstname: firstNameInput.val().trim(),
            lastname: lastNameInput.val().trim(),
            date:dateInput.val().trim(),
            gift:giftInput.val().trim()
    };
   
    if (!birthdayData.firstname || !birthdayData.lastname || !birthdayData.date || !birthdayData.gift) {
        return;
      }

      addBirthday(birthdayData.firstname, birthdayData.lastname,birthdayData.date, birthdayData.gift);

    
    function addBirthday(firstname,lastname,date,gift) {
    
        $.post("/api/birthday", {
            firstname:firstname.charAt(0).toUpperCase() + firstname.slice(1),
            lastname:lastname.charAt(0).toUpperCase() + lastname.slice(1),
            date: date,
            gift: gift.charAt(0).toUpperCase() + gift.slice(1)
        
        },function(){
            console.log("sent")
                // ****  update the url here when the calender section is done
                window.location.replace("/");
                // If there's an error, log the error
        })
      }

});








});