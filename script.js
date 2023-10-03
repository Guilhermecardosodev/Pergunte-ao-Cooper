const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const clearButton = document.getElementById("clear-button"); // Adicione esta linha

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    performSearch();
});

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
    }
});

// Adicione este trecho para limpar a pesquisa
clearButton.addEventListener("click", function () {
    searchInput.value = ""; // Limpa o campo de pesquisa
    hideSearchResults(); // Oculta os resultados de pesquisa
});

function performSearch() {
    const query = searchInput.value;
    if (query.length >= 3) {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchURL;
    } else {
        hideSearchResults();
    }
}

window.addEventListener('load', function () {
    hideSearchResults();
});

function hideSearchResults() {
    searchResults.style.display = "none";
}