// Write your JavaScript code here!
function submitForm() {
    console.log("hello?")
    //document.getElementById("launch-form").innerHTML += "Form submitted";
   window.addEventListener("load", function () {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
         response.json().then(function (json) {
            console.log(json);
           
            let destination = document.getElementById("missionTarget");

            destination.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">
            `
         })
      })


       let forms = document.querySelectorAll("form");
       let form = forms[0]
       console.log(form);
       form.addEventListener("submit", function (event) {
           //stop the form submission
           event.preventDefault();
          let pilotName = document.getElementById("pilotName")
          let copilotName = document.getElementById("copilotName")
          let fuelLevel = document.getElementById("fuelLevel")
          let cargoMass = document.getElementById("cargoMass")
          
          //Validate field complete
          if (pilotName.value === "") {
            alert("All fields are required! Please enter a pilot name.");
          }
          
          if (copilotName.value === "") {
            alert("All fields are required! Please enter a co-pilot name.");
          }

          if (fuelLevel.value === "" ) {
            alert("All fields are required! Please enter the fuel level.");
          }

          if (cargoMass.value === "") {
            alert("All fields are required!  Please enter the cargo mass.");
         }

          let pilotsName = String(pilotName.value)
          let copilotsName = String(copilotName.value)
          let cargoMassNum = Number(cargoMass.value)
          let fuelLevelNum = Number(fuelLevel.value)

            //Type Validation
          if (isNaN(pilotsName) === false) {
              alert("Please enter a string for the pilot's name!");
          }

          if (isNaN(copilotsName) === false) {
            alert("Please enter a string for the co-pilot's name!");
          }
          
          if (isNaN(fuelLevelNum) === true) {
              alert("Please enter a number for the fuel level!")
          }
          
          if (isNaN(cargoMassNum) === true) {
            alert("Please enter a number for the cargo mass!")
          }
 
          document.getElementById("pilotStatus").innerText = `Pilot ${pilotsName} is ready for launch`;
          document.getElementById("copilotStatus").innerText = `Co-Pilot ${copilotsName} is ready for launch`;
 
          if (cargoMassNum > 10000 && fuelLevelNum < 10000) {
             document.getElementById("facultyItems").style.visibility = "visible";
             document.getElementById("cargoStatus").innerText = "Cargo mass too high for launch";
             document.getElementById("launchStatus").innerText = "Shuttle Not Ready for Launch"
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
          } else if (cargoMassNum < 10000 && fuelLevelNum < 10000) {
            document.getElementById("facultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerText = "Shuttle Not Ready for Launch"
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
          } else if (cargoMassNum > 10000 && fuelLevelNum > 10000) {
             document.getElementById("facultyItems").style.visibility = "visible";
             document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
             document.getElementById("launchStatus").innerText = "Shuttle Not Ready for Launch"
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";
          } else if (cargoMassNum < 10000 && fuelLevelNum > 10000) {
             document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
             document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";
             document.getElementById("launchStatus").style.color = "green";
             document.getElementById("launchStatus").innerText = "Shuttle is ready for launch";
          };
         
       })
 
 })
}
 
 submitForm()
 // form.addEventListener("submit", submitForm);
 
 /* This block of code shows how to format the HTML once you fetch some planetary JSON!
 <h2>Mission Destination</h2>
 <ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
 </ol>
 <img src="${}">
 */
 