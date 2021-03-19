import { gql, useQuery } from "@apollo/client";
const Home = () => {
  const { data, error, loading } = useQuery(READ_MOVIES);
  console.log(data, error, loading);
  if (loading) {
    return "loading...";
  }
  if (data && data.readMovies) {
    return data.readMovies.map((m) => <h1>{m.id}</h1>);
  }
};
export default Home;

const READ_MOVIES = gql`
  {
    readMovies(limit: 2, rating: 1) {
      id
      title
      rating
      summary
      language
      medium_cover_image
      description_full
      genres
      description_intro
    }
  }
`;
