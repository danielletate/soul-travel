import styled from "styled-components";
import way1 from "../assets/hiking.jpg";
import way2 from "../assets/biking.jpg";
import way3 from "../assets/food.jpg";
import way4 from "../assets/family.jpg";
import way5 from "../assets/adventure.jpg";
import way6 from "../assets/camels.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Travel() {
  const waysToTravel = [
    {
      img: way1,
      tourType: "Walking & trekking tours",
    },
    {
      img: way2,
      tourType: "Cycling tours",
    },
    {
      img: way3,
      tourType: "Food tours",
    },
    {
      img: way4,
      tourType: "Family friendly tours",
    },
    {
      img: way5,
      tourType: "Adventure & active tours",
    },
    {
      img: way6,
      tourType: "Wildlife tours",
    },
  ];

  return (
    <div>
      <Wrapper>
        <h1>Ways to travel</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "4rem",
          }}
        >
          {waysToTravel.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <Card id="travel">
                  <div className="info">
                    <img src={item.img} alt="walking" />
                    <p>{item.tourType}</p>
                  </div>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 1rem 2.5rem;
  h1 {
    color: #5b5b5b;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0.8rem;
    margin: 0 2rem;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 2rem;
  .info {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 18rem;
    padding: 2.5rem;
    border-radius: 0.5rem;
    margin: 1.5rem;
    background-color: #f6f6fa;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #ddddec;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
    p {
      padding: 0.5rem;
      margin-top: 0.3rem;
      color: #4c4f56;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

export default Travel;
