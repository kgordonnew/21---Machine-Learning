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
  AvgWait: "76",
  MaxWait: "115",
  MinWait: "5",
  info: "Explore the Harambe Wildlife Reserve, home to 34 species living in 110 acres of picturesque open plains, shady forest landscapes and rocky wetlands. Your rugged safari vehicle is driven by an expert guide, who helps point out animals and shares fascinating wildlife facts during this extraordinary 18-minute expedition"
},
{
  location: [28.3594441, -81.587395],
  Ride: "Expedition Everest",
  AvgWait: "31",
  MaxWait: "60",
  MinWait: "5",
  info: "Wander into a Tibetan village at the base of Mount Everest and board a train to the “top of the world.” Beware: Some say a legendary snow monster—the Yeti—lives deep in the mountain.  After a steep ascent, hold on tight as your train picks up speed and races into the darkness. Without warning, a broken and twisted track appears in front of you. Brace yourself as you plummet backward into total darkness. Inside the cavern, the mythical tale comes true as you see the shadow of a massive, growling beast!  Race to escape the cursed mountain—before the Yeti claims another expedition!"
},
{
  location: [28.354862, -81.587964],
  Ride: "DINOSAUR",
  AvgWait: "34",
  MaxWait: "90",
  MinWait: "0",
  info: "A paleontologist recruits you for a secret mission to bring a 3.5-ton Iguanadon back to the present. There’s only one problem—the giant meteor that wiped out life on Earth is on the way!  Board a rugged Time Rover vehicle and set off on a thrilling adventure through a primeval forest filled with life-like dinosaurs. Careen through unpredictable hairpin turns. Dart around a fearsome Velociraptor hunting for prey. Avoid the clutches of a Cearadactylus soaring overhead! As the clock counts down, fiery meteors crash down around you. Will you make your escape before the dinosaurs—and you—become extinct?"
},
{
  location: [28.354739, -81.592189],
  Ride: "Na'vi River Journey",
  AvgWait: "53",
  MaxWait: "90",
  MinWait: "5",
  info: "On this gentle, visually stunning cruise, you’ll glide through a series of caves and into the rainforest, where exotic glowing plants and amazing creatures surround you on all sides—even overhead."
},
{
  location: [28.354805, -81.592886],
  Ride: "Avatar Flight of Passage",
  AvgWait: "128",
  MaxWait: "195",
  MinWait: "15",
  info: "Get a banshee’s-eye view of the beauty and grandeur of Pandora on a rite of passage you won’t soon forget!  Deep in the heart of the Valley of Mo’ara, discover Avatar Flight of Passage—an all-new expedition that lets interstellar explorers like you climb atop a mountain banshee for a breathtaking, first-person flight over the moon’s incredible landscape."
},
{
  location: [28.375216, -81.549383],
  Ride: "Spaceship Earth",
  AvgWait: "17",
  MaxWait: "50",
  MinWait: "5",
  info: "A geodesic sphere that serves as the symbolic structure of Epcot, at the Walt Disney World Resort. It is also the name of the dark ride attraction that is housed within the sphere that takes guests on a time machine-themed experience."
},
{
  location: [28.372705, -81.5552568],
  Ride: "Soarin'",
  AvgWait: "31",
  MaxWait: "65",
  MinWait: "10",
  info: "Depart on a journey through the sky, flying high from one extraordinary landmark to the next. It’s Soarin’ Around the World!  Passengers, prepare for liftoff—and get ready to visit some of the planet’s most awe-inspiring destinations."
},
{
  location: [28.356476, -81.563199],
  Ride: "Slinky Dog Dash",
  AvgWait: "77",
  MaxWait: "115",
  MinWait: "40",
  info: "Get a glimpse of everything Toy Story Land has to offer as you stretch Slinky Dog’s coils to the limit across Andy’s backyard! Come along for a roller-coaster-style ride as he bends and twists and stretches his way all throughout this new land."
},
{
  location: [28.355542, -81.562716],
  Ride: "Alien Swirling Saucers",
  AvgWait: "35",
  MaxWait: "75",
  MinWait: "5",
  info: "The cutest extraterrestrials in the galaxy have landed, and they’re taking you for a ride. Power up the saucers for an interstellar romp through space, while futuristic tunes set the mood.  Space cadets of all ages may enjoy this gentle whirl through the sky above Toy Story Land."
},
{
  location: [28.359724, -81.562083],
  Ride: "Rock'n Roller Coaster Starring Aerosmith",
  AvgWait: "49",
  MaxWait: "85",
  MinWait: "5",
  info: "Rock and roll in the dark on your way to an Aerosmith concert, passing legendary landmarks along the way!"
},
{
  location: [28.356042, -81.561268],
  Ride: "Toy Story Mania!",
  AvgWait: "48",
  MaxWait: "75",
  MinWait: "5",
  info: ""
},
{
  location: [28.419129, -81.577171],
  Ride: "Space Mountain",
  AvgWait: "0",
  MaxWait: "",
  MinWait: "",
  info: "Play 5 unique, virtual carnival games in 3D alongside the loveable cast of characters from the Disney Pixar Toy Story films."
},
{
  location: [28.419237, -81.585113],
  Ride: "Splash Mountain",
  AvgWait: "22",
  MaxWait: "50",
  MinWait: "5",
  info: "Gently drift through a colorful Southern bayou along with happy-go-lucky Br’er Rabbit as he looks for his “laughing place.” But be warned: Br’er Bear and Br’er Fox are in hot pursuit of this wayward hare. "
},
{
  location: [28.420605, -81.579868],
  Ride: "Seven Dwarfs Mine Train",
  AvgWait: "71",
  MaxWait: "150",
  MinWait: "5",
  info: "At the summit, feel the wind across your face as you navigate hairpin turns and head deep into the mine shaft—your creaky cart teetering back and forth. Soon, the dark sparkles with glittering jewels and you encounter the Seven Dwarfs, whistling and singing while they work."
},
{
  location: [28.417859, -81.585344],
  Ride: "Pirates of the Caribbean",
  AvgWait: "30",
  MaxWait: "55",
  MinWait: "5",
  info: "Board a weathered barge for a treacherous voyage to the 17th century, when rowdy rogues and ruthless rapscallions ransacked Caribbean seaport towns. Sing along as pirates serenade you with their anthem, “Yo Ho, Yo Ho (A Pirate’s Life for Me)."
}

];


for (var i = 0; i < sites.length; i++) {
  var city = sites[i];
  L.marker(city.location)
    .bindPopup("<h3>" + city.Ride + "</h3> <hr> <h5> Average Wait Time (mins): " + city.AvgWait + "</h5> <hr> <h5> Maximum Wait Time (mins): " + city.MaxWait +"</h5><hr><h5> Minimum Wait Time (mins): " + city.MinWait + "</h5><hr><h5>Ride Description: " + city.info + "</h5>")
    .addTo(myMap);
}
