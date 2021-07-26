document.addEventListener("DOMContentLoaded", function () {
  // Declare Variables we will use later in the code
  // const url = "http://localhost:3000/books"
  const url = "http://www.nokeynoshade.party/api/queens/all";

  // Name pre-existing DOM Elements we will need to reference
  const container = document.getElementById("queen-container");
  const showPanel = document.getElementById("show-panel");

  // Create, name, and attach DOM Elements we will need to reference
  const list = document.createElement("ul");
  // listPanel.append(list);

  // Functions
  function removeQueen(queen) {
    const id = queen.querySelector("img").dataset.id;
    console.log(queen);
    fetch(url + `/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      // pessimistic rendering
      //.then(() => fetchAllPokemon())
      // optimistic rendering
      .then(() => {
        // document.querySelector("#pokemon-container").removeChild(pokemon)
        // pokemon.parentNode.removeChild(pokemon)
        queen.remove();
      });
  }

  function addQueenListener() {
    const queens = document.querySelectorAll(".queen-card");
    queens.forEach((queen) => {
      queen
        .querySelector(".queen-delete-button")
        .addEventListener("click", () => {
          removeQueen(queen);
        });
      queen.querySelector(".queen-add-button").addEventListener("click", () => {
        addQueen(queen);
      });
    });
  }

  function showQueen(queen) {
    console.log("showQueen called");

    showPanel.innerHTML = "";
    // Create DOM elements
    let image = document.createElement("img");
    let quote = document.createElement("p");
    let chooseBtn = document.createElement("button");
    // Assign content to those elements
    image.src = queen.image_url;
    quote.innerText = queen.quote;
    chooseBtn.innerText = "Choose";
    // Append newly created and filled DOM elements to the show panel
    showPanel.append(queen.name);
    showPanel.append(chooseBtn);
    showPanel.append(quote);
    showPanel.append(image);
  }

  function renderAllQueens(queens) {
    return queens.map(renderSingleQueen).join("");
  }

  function renderSingleQueen(queen) {
    return `
    <div class="queen-card" onClick= >
      <div class="queen-frame">
        <h1>${queen.name}</h1>
        <div>
          <img class="queen-image" src="${queen.image_url}">
        </div>
        <button data-action="add" class="queen-add-button">Add</button><br>
        <button data-action="delete" class="queen-delete-button">Delete</button><br>
      </div>
    </div>
    `;
  }

  // Get the content from the API
  function fetchContent(url) {
    // Go to the URL
    fetch(url)
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }

  fetchContent(url);
});
