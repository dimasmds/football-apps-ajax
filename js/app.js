const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';
const progressBar = ` <div class="progress">
                        <div class="indeterminate"></div>
                    </div>`;
let content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search-team");
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            getTeam(searchInput.value)
        }
    })
});


function getTeam(teamName) {
    // look branch for sample implementing request
}

function showTeam(data) {
    let responseText = `<div class="row">`;

    if(data.teams !== null) {
        data.teams.forEach(function (item) {
            responseText += `<div class="col s12 m6 l4"> <div class="card">
        <div class="card-image">
          <img src="${item.strTeamBadge}">
        </div>
        <div class="card-content">
          <span class="card-title">${item.strTeam}</span>
          <p class="text-ellipsis">${item.strDescriptionEN}</p>
        </div>
      </div></div>`
        });
    } else {
        responseText += `<p class="center">Data Not Found :(</p>`
    }

    responseText += `</div>`;
    content.innerHTML = responseText;
}
