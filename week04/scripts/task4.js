let myself = {}; 
myself.name = "Dave Ryan Santivanez Munguia";
myself.photo = "../images/photo.jpg";
myself.favoriteFoods = ["Causa Cangrejo", "Tacu Tacu", "Arroz Chaufa"];
myself.hobbies = ["Game Vide Games", "Football", "Sing"];

myself.placesLived = []; 

myself.placesLived.push({ place: "Argentina", length: "1 year" });
myself.placesLived.push({ place: "Peru", length: "2 years" });
myself.placesLived.push({ place: "Mexico", length: "3 years" });


document.getElementById("name").textContent = myself.name;

document.getElementById("photo").src = myself.photo;

document.getElementById("photo").alt = myself.name;

myself.favoriteFoods.forEach(function(food) {
  var li = document.createElement("li");
  li.textContent = food;
  document.getElementById("favorite-foods").appendChild(li);
});

myself.hobbies.forEach(function(hobby) {
  var li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});

myself.placesLived.forEach(function(place) {
  var dt = document.createElement("dt");
  dt.textContent = place.place;

  var dd = document.createElement("dd");
  dd.textContent = place.length;

  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
