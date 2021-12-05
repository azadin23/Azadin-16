import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";
import { useLocation } from "react-router-dom";

import movies from "../dummy-data";

const MovieList = () => {

  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const qs = require('query-string');
  const params = qs.parse(useLocation().search);

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: params.show || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0]
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies =
    movies
      .filter((item) => item.type == filter.category)
      .sort(function (a, b) {
        return ((a[filter.sort] > b[filter.sort]) ? 1 : ((a[filter.sort] < b[filter.sort]) ? -1 : 0))
      })
      .slice(0, filter.show)

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
