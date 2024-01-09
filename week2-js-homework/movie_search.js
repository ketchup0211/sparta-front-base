const searchInput = document.querySelector("#search-input");
searchInput.focus();

const fetchData = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjRiZDE4MjE1N2I1Njk3NzdiNDY2MmI4Y2YwYjRjZiIsInN1YiI6IjY1OWI4MjM0Y2E0ZjY3MDBmMDQzZmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.evSRwAo9ZsM7AIVmH0vskk5w3H6aFJBBPclFZwRsBHE",
      },
    }
  );

  const data = await response.json();
  return data.results;
};

const createMovieCards = async () => {
  const movieData = await fetchData();
  const cardList = document.querySelector(".card-list");

  cardList.innerHTML = movieData
    .map((movie) => {
      return `
        <div class="movie-card" id="${movie.id}">
          <h3 class="movie-title">${movie.title}</h3>
          <p>${movie.overview}</p>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <p>Rating: ${movie.vote_average}</p>
        </div>
      `;
    })
    .join("");

  cardList.addEventListener("click", ({ target }) => {
    if (target !== cardList) {
      const movieCard = target.closest(".movie-card");
      if (movieCard) {
        alert(`영화 id: ${movieCard.id}`);
      }
    }
  });
};

const handleSearch = (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? "block" : "none";
  });
};

document.querySelector("#search-form").addEventListener("submit", handleSearch);

createMovieCards();
