import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(READ_MOVIE, {
    variables: { id: +id },
  });
  return (
    <>
      {loading && <div>Loading...</div>}
      {data && data.readMovie && data.readMovie.title}{" "}
    </>
  );
};
export default Detail;
const READ_MOVIE = gql`
  query readMovie($id: Int!) {
    readMovie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;
