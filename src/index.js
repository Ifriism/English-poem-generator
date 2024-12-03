function poemGenerator(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Because I could not stop for Death. He kindly stopped for me. The carriage held but just ourselves. And Immortality.",
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

let formContainerElement = document.querySelector("#form-container");
formContainerElement.addEventListener("submit", poemGenerator);