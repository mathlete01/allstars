document.addEventListener("DOMContentLoaded", function () {
  // Declare Variables we will use later in the code
  // const url = "http://localhost:3000/books"
  const url = "http://www.nokeynoshade.party/api/queens/all";

  // Name pre-existing DOM Elements we will need to reference
  const container1 = document.getElementById("queen-container-1");
  const container2 = document.getElementById("queen-container-2");
  const container3 = document.getElementById("queen-container-3");
  const container4 = document.getElementById("queen-container-4");
  const container5 = document.getElementById("queen-container-5");
  const container6 = document.getElementById("queen-container-6");
  const container7 = document.getElementById("queen-container-7");
  const container8 = document.getElementById("queen-container-8");
  const container9 = document.getElementById("queen-container-9");
  const container10 = document.getElementById("queen-container-10");
  const showPanel10 = document.getElementById("show-panel");

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
  function fetchContent1(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/1/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container1.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }

  function fetchContent2(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/2/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container2.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent3(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/3/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container3.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent4(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/4/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container4.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent5(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/5/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container5.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent6(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/6/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container6.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent7(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/7/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container7.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent8(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/8/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container8.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent9(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/9/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container9.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }
  function fetchContent10(url) {
    // Go to the URL
    fetch("http://www.nokeynoshade.party/api/seasons/10/queens")
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => {
        console.log(jsonObj);
        container10.innerHTML = renderAllQueens(jsonObj);
        addQueenListener();
      });
  }

  fetchContent1(url);
  fetchContent2(url);
  fetchContent3(url);
  fetchContent4(url);
  fetchContent5(url);
  fetchContent6(url);
  fetchContent7(url);
  fetchContent8(url);
  fetchContent9(url);
  fetchContent10(url);
});
