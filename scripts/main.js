var map = L.map('map').setView([42.825634, -73.812430], 9.5);

L.tileLayer('https://api.mapbox.com/styles/v1/alexandramharris/clancxgpe000015rtlj4clgxc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleGFuZHJhbWhhcnJpcyIsImEiOiJjbGFuY253cWkwbnJlM3NxcnUzZ2swemc1In0.Vn0HPcXGziR0UXfzEgHbvw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);



var skateIcon = L.icon({
    iconUrl: 'icons/ice-skate.svg',
    iconSize:     [28, 85]
});








for ( let i = 0; i < places.length; i++) {
  L.marker( [places[i].Latitude, places[i].Longitude], {icon: skateIcon})
  .bindPopup('<h3>' + places[i].City + ", " + places[i].County + '</h3>' + '<p>' + places[i].Location + '</p>')
  .addTo(map);

}
