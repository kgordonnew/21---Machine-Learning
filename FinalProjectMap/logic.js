// Create a map object
var myMap = L.map("map", {
  center: [28.3600, -81.5900],
  zoom: 16
});

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


var sites = [{
  location: [28.360961, -81.592961],
  Ride: "Kilimanjaro Safaris",
  Wait: "0",
  info: ""
},
{
  location: [28.3594441, -81.587395],
  Ride: "Expedition Everest",
  Wait: "37",
  info: ""
},
{
  location: [28.354862, -81.587964],
  Ride: "DINOSAUR",
  Wait: "13",
  info: ""
},
{
  location: [28.354739, -81.592189],
  Ride: "Na'vi River Journey",
  Wait: "15",
  info: ""
},
{
  location: [28.354805, -81.592886],
  Ride: "Avatar Flight of Passage",
  Wait: "5",
  info: "Was the site of the first  SpaceX launch on March 24, 2006"
},
{
  location: [28.375216, -81.549383],
  Ride: "Spaceship Earth",
  Wait: "0",
  info: ""
},
{
  location: [28.372705, -81.5552568],
  Ride: "Soarin",
  Wait: "13",
  info: ""
},
{
  location: [28.356476, -81.563199],
  Ride: "Slinky Dog Dash",
  Wait: "15",
  info: ""
},
{
  location: [28.355542, -81.562716],
  Ride: "Alien Swirling Saucers",
  Wait: "5",
  info: ""
},
{
  location: [28.359724, -81.562083],
  Ride: "Rock'n Roller Coaster Starring Aerosmith",
  Wait: "0",
  info: ""
},
{
  location: [28.356042, -81.561268],
  Ride: "Toy Story Mania!",
  Wait: "37",
  info: ""
},
{
  location: [28.419129, -81.577171],
  Ride: "Space Mountain",
  Wait: "13",
  info: ""
},
{
  location: [28.419237, -81.585113],
  Ride: "Splash Mountain",
  Wait: "15",
  info: ""
},
{
  location: [28.420605, -81.579868],
  Ride: "Seven Dwarfs Mine Train",
  Wait: "5",
  info: ""
},
{
  location: [28.417859, -81.585344],
  Ride: "Pirates of the Caribbean",
  Wait: "0",
  info: ""
}

];


for (var i = 0; i < sites.length; i++) {
  var city = sites[i];
  L.marker(city.location)
    .bindPopup("<h3>" + city.Ride + "</h3> <hr> <h5> Wait Times " + city.Wait + "</h5> <hr> <h5> Additional Information: " + city.info + "</h5>")
    .addTo(myMap);
}
