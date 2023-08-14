import "./App.css";
import Header from "./components/Header";
import { Movie } from "./components/Movie";
import movies from "./movie.json";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        {movies.map((ele) => {
          return (
            <Movie title={ele.Title} year={ele.Year} img={ele.Poster}></Movie>
          );
        })}
      </div>
    </div>
  );
};

export default App;
