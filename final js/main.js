
      const charactersList = document.getElementById("characters-list");
      const modal = document.querySelector(".modal");


      const modalHeading = document.querySelector(".modal-heading");
      const birthYear = document.querySelector(".birth-year");
      const eyeColor = document.querySelector(".eye-color");
      const gender = document.querySelector(".gender");
      const hairColor = document.querySelector(".hair-color");
      const height = document.querySelector(".height");
      const mass = document.querySelector(".mass");
      
      fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          for (let i = 0; i < data.results.length; i++) {
            const character = data.results[i];
            const li = document.createElement("li");

            const img = document.createElement("img");
            img.src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`;
            img.alt = character.name;
            img.classList.add('character-image');
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
          }
        });
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      


      