birthdaysJson = getJson("birthdays.json");
birthdaysJson.then(
  function(value) {console.log("successfully loaded json");},
  function(error) {console.log(error);}
);
updateDate(new Date(), birthdaysJson);

async function getJson(fileName) {
  const response = await fetch(fileName);
  const json = await response.json();
  console.log(json);
  return json;
}

function updateDate(date) {
  birthdaysJson.then(
    function(value) {
      document.getElementById("todaysDate").innerHTML = "Today is " + date.toDateString() + ".";
      const birthdays = value;
      const birthdaysToday = [];
      const dateString = date.toDateString().substring(4, 10);
      console.log(dateString);
      for (person in birthdays) {
        if ( dateString == birthdays[person] ) {
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
    },
    function(error) {console.log(error);}
  )
}
function changeDate() {
  let date = new Date( prompt( "Enter a date", new Date().toDateString().substring(4) ) );
  if (date.toString() == "Invalid Date" ) {
    alert("Invalid Date");
  } else {
    updateDate(date);
  }
}
