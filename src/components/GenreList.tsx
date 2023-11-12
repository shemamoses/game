import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <div>
      <ul>
        {genres.map(
          (genre, index) => genre !== null && <li key={index}>{genre}</li>
        )}
      </ul>
    </div>
  );
};

export default GenreList;
