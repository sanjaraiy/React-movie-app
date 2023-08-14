import "./Movie.css";

export const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>Year:{props.year}</p>
    </div>
  );
};
