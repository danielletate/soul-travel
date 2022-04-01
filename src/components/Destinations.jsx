import styled from "styled-components";
import destination1 from "../assets/destination1.jpg";
import destination2 from "../assets/destination2.jpg";
import destination3 from "../assets/destination3.jpg";
import destination4 from "../assets/destination4.jpg";
import destination5 from "../assets/destination5.jpg";
import destination6 from "../assets/destination6.jpg";

function Destinations() {
  const destinations = [
    {
      img: destination1,
      location: "Sydney, Australia",
      price: "2,950",
    },
    {
      img: destination2,
      location: "Paris, France",
      price: "2,280",
    },
    {
      img: destination3,
      location: "Bangkok, Thailand",
      price: "1,920",
    },
    {
      img: destination4,
      location: "Jerusalem, Israel",
      price: "1,770",
    },
    {
      img: destination5,
      location: "Santorini, Greece",
      price: "1,820",
    },
    {
      img: destination6,
      location: "Hue, Vietnam",
      price: ",1850",
    },
  ];

  return (
    <div>
      {/* Render wrapper component with data from destinations  */}
      <Wrapper>
        <h1>Featured destinations</h1>
        <div className="destinations">
          {destinations.map((destination, index) => {
            return (
              <Card id="destinations" key={index}>
                <img src={destination.img} alt="city" />
                <h2>{destination.location}</h2>
                <p>
                  <span>From</span> USD ${destination.price}
                </p>
              </Card>
            );
          })}
        </div>
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
    margin: 2rem;
    margin-bottom: -2rem;
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 2.5rem;
    padding: 2rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  background-color: aliceblue;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
  h2 {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  p {
    padding: 0.5rem;
    margin-top: 0.3rem;
    color: #4c4f56;
    font-size: 1rem;
    font-weight: 400;
  }
  span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export default Destinations;
