document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const query = searchBar.value;
            if (query) {
                alert(`Searching for: ${query}`);
                // Implement actual search functionality here
            }
        }
    });
});
