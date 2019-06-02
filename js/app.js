document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search-team")
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            getTeam(searchInput.value)
        }
    })
});
var progressBar = ` <div class="progress">
                        <div class="indeterminate"></div>
                    </div>`;

function getTeam(teamName) {

}
