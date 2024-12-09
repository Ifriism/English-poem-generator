function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function poemGenerator(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
      let apiKey = "fea6579f5ctf53bb7491ae80ac32o60f";
      let context = "You are a romantic poem expert who enjoys writing short poems. Please generate a 4 line poems and separate each line with a <br />. Please make sure to follow the user instructions";
      let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">Generating English poem about ${instructionsInput.value}</div>`;

      axios.get(apiUrl).then(displayPoem);

}

let formContainerElement = document.querySelector("#form-container");
formContainerElement.addEventListener("submit", poemGenerator);