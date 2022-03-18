function updateDate(date) {
  document.getElementById("todaysDate").innerHTML = "Today is " + date.toDateString() + ".";
  const birthdays = {Parker: new Date("05/30/2001"), Bob: new Date ("03/17/2000"), Alice: new Date("03/17/1998"),
                     Shoshana: new Date("04/12/2007"), Declan: new Date("04/22/2009"), Susie: new Date("03/17/2002")};
  const birthdaysToday = [];
  for (person in birthdays) {
    if ( date.getMonth() == birthdays[person].getMonth() & date.getDate() == birthdays[person].getDate() ) {
        birthdaysToday.push(person);
    }
  }
  var birthdayMessage = "";
  if (birthdaysToday.length) {
    birthdayMessage = "Happy birthday to ";
    for (let i = 0; i < birthdaysToday.length; i++) {
      birthdayMessage += birthdaysToday[i];
      switch (birthdaysToday.length - 1 - i){
        case 0: birthdayMessage += "!"; break;
        case 1: birthdayMessage += (birthdaysToday.length >= 3) ? ", and " : " and "; break;
        default: birthdayMessage += ", ";
      }
    }
  }
  document.getElementById("birthdayMessage").innerHTML = birthdayMessage;
}
function changeDate() {
  let date = new Date( prompt( "Enter a date", new Date().toDateString().substring(4) ) );
  if (date.toString() == "Invalid Date" ) {
    alert("Invalid Date");
  } else {
    updateDate(date);
  }
}
