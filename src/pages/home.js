import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/movie";

const Home = () => {
  const { loading, data } = useQuery(READ_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading &&
        data.readMovies &&
        data.readMovies.map((m) => <Movie key={m.id} id={m.id} />)}
    </Container>
  );
};

export default Home;

const READ_MOVIES = gql`
  query readMovies {
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
export const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;
