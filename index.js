let bankArray = [];
let oddArray = [];
let evenArray = [];

function UserInput(input){
    const $form = document.createElement("form");
    $form.innerHTML = `
        <label>
            Add a number to the bank
            <input name="count" type="number" min="1" />
        </label>
        <button type="submit">Add number</button>
        <button type="button" class="sort1">Sort 1</button>
        <button type="button" class="sortAll">Sort All</button>
    `;

    const $sort1 = $form.querySelector(".sort1");
    const $sortAll = $form.querySelector(".sortAll");

    // TODO: add a `submit` event listener
    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData($form);
        let inputCount = formData.get("count");
        inputCount = parseFloat(inputCount);
        if (inputCount > 0){
            bankArray.push(inputCount);
            render();
        }
    });

    $sort1.addEventListener('click', (event) => {
      if (bankArray[0] % 2 === 0){
        evenArray.push(bankArray[0]);
        bankArray.shift();
      }
      else{
        oddArray.push(bankArray[0]);
        bankArray.shift();
      }
      render();
    });

    $sortAll.addEventListener('click', (event) => {
      while (bankArray.length > 0){
        if (bankArray[0] % 2 === 0){
            evenArray.push(bankArray[0]);
            bankArray.shift();
        }
        else{
            oddArray.push(bankArray[0]);
            bankArray.shift();
        }
      }
      render();
    });

    return $form;
}


function BankResults(){
    const $container = document.createElement("div");

    const $title = document.createElement("h2");
    $title.textContent = "Bank";

    const $box = document.createElement("div");
    $box.className = "resultclass";    
    $box.textContent = bankArray.join(" ");

    $container.appendChild($title);
    $container.appendChild($box);

    return $container;
}

function OddResults(){
    const $container = document.createElement("div");
    const $title = document.createElement("h2");
    const $box = document.createElement("div");
    $box.className = "resultclass";

    $title.textContent = "Odd";
    $box.textContent = oddArray.join(" ");

    $container.appendChild($title);
    $container.appendChild($box);

    return $container;
}


function EvenResults(){
    const $container = document.createElement("div");
    const $title = document.createElement("h2");
    const $box = document.createElement("div");
    $box.className = "resultclass";

    $title.textContent = "Even";
    $box.textContent = evenArray.join(" ");

    $container.appendChild($title);
    $container.appendChild($box);

    return $container;
}




// === Render ===
function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
        <h1>Odds and Evens</h1>
        <UserInput></UserInput>
        <BankResults></BankResults>
        <OddResults></OddResults>
        <EvenResults></EvenResults>   
    `;
    $app.querySelector("UserInput").replaceWith(UserInput());
    $app.querySelector("BankResults").replaceWith(BankResults());
    $app.querySelector("OddResults").replaceWith(OddResults());
    $app.querySelector("EvenResults").replaceWith(EvenResults());
}
render();