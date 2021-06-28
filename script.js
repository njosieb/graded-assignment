// Write your JavaScript code here!
function submitForm() {
    console.log("hello?")
    //document.getElementById("launch-form").innerHTML += "Form submitted";
    window.addEventListener("load", function () {
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
          
          if (pilotName.value === "" || copilotName.value === "") {
            return alert("All fields are required!");
          } else if (fuelLevel.value === "" || cargoMass.value === "") {
            return alert("All fields are required!");
          }
 
          if (typeof pilotName.value !== "string" && typeof copilotName.value !== "string") {
             return alert("Please enter a string!");
          } else if (isNaN(fuelLevel.value) === true && isNaN(cargoMass.value) === true) {
             return alert("Please enter a number!")
          }
 
          let cargoMassNum = Number(cargoMass.value)
          let fuelLevelNum = Number(fuelLevel.value)
 
          document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} is ready for launch`;
          document.getElementById("copilotStatus").innerText = `Co-Pilot ${copilotName.value} is ready for launch`;
 
          if (cargoMassNum > 10000) {
             document.getElementById("facultyItems").style.visibility = "visible";
             document.getElementById("cargoStatus").innerText = "Cargo mass not low enough for launch";
             document.getElementById("launchStatus").innerText = "Shuttle Not Ready for Launch"
             document.getElementById("launchStatus").style.color = "red";
          }
 
          if (fuelLevelNum < 10000) {
             document.getElementById("facultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
             document.getElementById("launchStatus").innerText = "Shuttle Not Ready for Launch";
          }
 
          if (cargoMassNum < 10000 && fuelLevelNum > 10000) {
             document.getElementById("launchStatus").style.color = "green";
             document.getElementById("launchStatus").innerText = "Shuttle is ready for launch";
             document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";
             document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
          }
          
          fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
             response.json().then(function (json) {
                console.log(json);
                
          
 
                let destination = document.getElementById("missionTarget");
 
                destination.innerHTML = `
                   <h2>Mission Destination</h2>
                   <ol>
                      <li>Name: ${json[1].name}</li>
                      <li>Diameter: ${json[1].diameter}</li>
                      <li>Star: ${json[1].star}</li>
                      <li>Distance from Earth: ${json[1].distance}</li>
                      <li>Number of Moons: ${json[1].moons}</li>
                   </ol>
                   <img src="${json[1].image}">
                `
             })
          })
 
         
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
 