import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import styled from "styled-components";
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(READ_MOVIE, {
    variables: { id: +id },
  });
  console.log(data);
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data?.readMovie?.title}</Title>
        <Subtitle>
          {data?.readMovie?.language} {data?.readMovie?.rating}
        </Subtitle>
        <Description>{data?.readMovie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.readMovie?.medium_cover_image}></Poster>
    </Container>
  );
};
export default Detail;

const READ_MOVIE = gql`
  query readMovie($id: Int!) {
    readMovie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    getSuggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;
