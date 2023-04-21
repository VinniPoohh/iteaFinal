
      const charactersList = document.getElementById("characters-list");
      const modal = document.querySelector(".modal");


      const modalHeading = document.querySelector(".modal-heading");
      const birthYear = document.querySelector(".birth-year");
      const eyeColor = document.querySelector(".eye-color");
      const gender = document.querySelector(".gender");
      const hairColor = document.querySelector(".hair-color");
      const height = document.querySelector(".height");
      const mass = document.querySelector(".mass");

      const characters = ["Anakin Skywalker",
      "Wilhuff Tarkin",
      "Chewbacca",
      "Han Solo",
      "Greedo",
      "Jabba Desilijic Tiure",
      "Wedge Antilles",
      "Jek Tono Porkins",
      "Yoda",
      "Palpatine"
];
      
characters.forEach(characterName => {
  fetch(`https://swapi.dev/api/people/?search=${characterName}`)
    .then(response => response.json())
    .then(data => {
      const character = data.results[0];
 
    

            const img = document.createElement("img");
            // img.src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`;
            img.src = `https://starwars-visualguide.com/assets/img/characters/${data.results[0].url.match(/\d+/)[0]}.jpg`;
            img.alt = character.name;
            img.classList.add('character-image');
            const li = document.createElement("li");

            li.appendChild(img);
            const name = document.createElement("p");
            name.textContent = character.name;
            li.appendChild(img);
            li.appendChild(name);
            li.addEventListener("click", function() {
              modalHeading.textContent = character.name;
              birthYear.textContent = character.birth_year;
              eyeColor.textContent = character.eye_color;
              gender.textContent = character.gender;
              hairColor.textContent = character.hair_color;
              height.textContent = character.height;
              mass.textContent = character.mass;
              modal.style.display = "block";
            });
            charactersList.appendChild(li);
          })
          .catch(error => {
            console.error(error);
          });
      });
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      


      