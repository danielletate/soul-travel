import styled from "styled-components";
import homeImage from "../assets/hero.jpg";

function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="home" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Welcome to your next big adventure</h1>
          <p>Your journey awaits!</p>
        </div>
        <div className="search">
          <div className="where">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="when">
            <label htmlFor="">When you want to go</label>
            <input type="date" />
          </div>
          <div className="button">
            <button>
              <a href="hero">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      height: 80vh;
      filter: brightness(60%);
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
      h1 {
        font-size: 3rem;
        color: #ffffff;
        font-weight: 400;
      }
      p {
        color: #ffffff;
        font-size: 1.3rem;
        opacity: 70%;
      }
    }
    .search {
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      .where {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        label {
          font-size: 1.1rem;
          color: #ffffff;
        }
        input {
          border: none;
          border-radius: 1rem;
          padding: 1rem;
          color: grey;
          ::placeholder {
            font-size: 0.9rem;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .when {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        label {
          font-size: 1.1rem;
          color: #ffffff;
        }
        input {
          border: none;
          border-radius: 1rem;
          padding: 1rem;
          color: grey;
          ::placeholder {
            font-size: 0.9rem;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem 1.5rem;
        background-color: #f45da5;
        color: #ffffff;
        border: none;
        font-size: 1.1rem;
        border-radius: 1rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #bf417b;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Hero;
