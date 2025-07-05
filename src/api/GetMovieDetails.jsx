const GetMovieDetails = async ({ params }) => {
  const res = await fetch(
    "https://gist.githubusercontent.com/Uday1188/56201c9dab156447d8bbc5612cabffb1/raw/4f85fb61fa3433f7984251c3b575f09643ed28fb/Movies.json"
  );
  const data = await res.json();
  return data.find((m) => m.id.toString() === params.movieID);
};

export default GetMovieDetails;
