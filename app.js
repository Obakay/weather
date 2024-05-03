var humidityPercent = document.getElementById("humidityPercent")
var airQuality = document.getElementById("")
var UVindex = document.getElementById("index")
var temperaturePercent = document.getElementById("temperaturePercent")
var detailsBtn = document.getElementById("detailsBtn")
var container1 = document.getElementById("container1")
var container2 = document.getElementById("container2")

var  curCity = "london"
var units ="metric"

detailsBtn.addEventListener("click" ,()=> {
   container2.style.display = "block"
     container1.style.display = "none"

})
