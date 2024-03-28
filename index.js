function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((json) => renderBooks(json)); // Pass the JSON data to the renderBooks function
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks(); // Call fetchBooks when the DOM content is loaded
});
