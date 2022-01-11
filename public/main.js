const campoPesquisa = document.getElementById("searchField");
const selectionSearch = document.getElementById("fieldTag");
const buttonSearch = document.getElementById("searchButton");
const resposta = document.querySelector("tbody");
let selectionOption ;
let time = 0;

function mudarSelecao() {
    selectionOption = selectionSearch.options[selectionSearch.selectedIndex].value;
    console.log(selectionOption);
}

function addData(line) {
    resposta.innerHTML = "";
    line.forEach(element => {
        let linha = document.createElement("tr");
        let celulaID = document.createElement("td");
        celulaID.appendChild(document.createTextNode(element.id));
        let celulaNome = document.createElement("td");
        celulaNome.appendChild(document.createTextNode(element.name));
        let celulaEmail = document.createElement("td");
        celulaEmail.appendChild(document.createTextNode(element.email));
        linha.appendChild(celulaID);
        linha.appendChild(celulaNome);
        linha.appendChild(celulaEmail);
        resposta.appendChild(linha);                
    });
}

function promiseQuery() {
    const searchQuery = campoPesquisa.value;
    console.log(searchQuery);

    if (searchQuery.length <= 3) {
        addData([]);
        return
    }

    clearTimeout(time);

    time = setTimeout(function() {
        const promise = fetch("/users?"+ selectionOption + "=" + searchQuery);

        promise.then(function(answer) {
            const answerText = answer.json();
            return answerText;
        }).then(function(users) {
            addData(users)
        })
    }, 2000);
}

campoPesquisa.addEventListener('input' , function() {
    promiseQuery();
});

buttonSearch.addEventListener("click", function() {
    promiseQuery();
});

