import { useNavigate } from "react-router-dom";
import {
  DetailWrapper,
  DetailContainer,
  DetailHeader,
  DetailSection,
  MovieTitle,
  MovieSub,
  MovieStar,
  IframeContainer,
  IframeBox,
  BackButton,
} from "./styledComp";

const Detail = ({ content }) => {
  const navigate = useNavigate();
  return (
    <DetailWrapper $imagepath={content.imagePath}>
      <DetailContainer>
        <DetailHeader>
          <MovieTitle>{content.title}</MovieTitle>
          <MovieSub>
            개봉 : {content.detail.releaseDate}
            <br />
            {content.detail.movieRating}|{content.detail.countries.join(", ")}|
            {content.detail.genre.join(", ")}
          </MovieSub>
        </DetailHeader>
        <DetailSection>
          <h3>주연</h3>
          <div>
            {content.detail.starring.map((item, idx) => (
              <MovieStar key={idx}>{item}</MovieStar>
            ))}
          </div>
        </DetailSection>
        <DetailSection>
          <h3>줄거리</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{content.detail.summary}</p>
        </DetailSection>
        <DetailSection>
          <h3>예고편</h3>
          <IframeContainer>
            <IframeBox
              dangerouslySetInnerHTML={{ __html: content.detail.videoUrl }}
            ></IframeBox>
          </IframeContainer>
        </DetailSection>
        <BackButton onClick={() => navigate(-1)}>{"<"}BACK</BackButton>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default Detail;
