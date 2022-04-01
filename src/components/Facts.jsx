import styled from "styled-components";
import backgroundImg from "../assets/beach.jpg";

function Facts() {
  return (
    <Section>
      <div className="background">
        <img src={backgroundImg} alt="beach" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Some fun facts</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="stats">
          <div className="stat">
            <h4>45,000</h4>
            <p>Destination Places</p>
          </div>
          <div className="stat">
            <h4>120,000</h4>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h4>56,800</h4>
            <p>Restaurants</p>
          </div>
          <div className="stat">
            <h4>92,000</h4>
            <p>Hotels</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  margin: 5rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      height: 85vh;
      filter: brightness(70%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    .title {
      color: #ffffff;
      h1 {
        font-size: 2.5rem;
        font-weight: 500;
      }
      p {
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }
    }
    .stats {
      margin: 3rem 0;
      padding: 3rem 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5rem;
      text-align: center;
      align-items: center;
      .stat {
        h4 {
          color: #ffffff;
          font-weight: 500;
          font-size: 2.5rem;
          margin-top: 1rem;
        }
        p {
          color: #d4dbd9;
          margin-top: 1rem;
        }
      }
    }
  }
`;

export default Facts;
