// const { Console } = require("console");

$(document).ready(() => {

    console.log("on birthday page")

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
    console.log("it is here!")
    console.log(birthdayData)
    if (!birthdayData.firstname || !birthdayData.lastname || !birthdayData.date || !birthdayData.gift) {
        return;
      }

      addBirthday(birthdayData.firstname, birthdayData.lastname,birthdayData.date, birthdayData.gift);

    
    function addBirthday(firstname,lastname,date,gift) {
        console.log(firstname,lastname,date,gift)
        $.post("/api/birthday", {
            firstname:firstname,
            lastname:lastname,
            date: date,
            gift: gift
        
        },function(){
            console.log("sent")
                // ****  update the url here when the calender section is done
                window.location.replace("/");
                // If there's an error, log the error
        })
        //   .then(() => {
        //     // ****  update the url here when the calender section is done
        //     window.location.replace("/");
        //     // If there's an error, log the error
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      }

});








});