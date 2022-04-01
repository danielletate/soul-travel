import styled from "styled-components";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#travel">Ways to travel</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button>
          <a href="#contact">Connect</a>
        </button>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #8cd9d1;
  height: 15vh;
  border-bottom: 2px solid #666;
  .container {
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 100%;
    .logo {
      cursor: pointer;
    }
    ul {
      display: flex;
      gap: 1.5rem;
      li {
        list-style: none;
        a {
          text-decoration: none;
          cursor: pointer;
          color: #f45da5;
          font-size: 1.2rem;
          font-weight: 400;
          transition: 0.2s ease-in-out;
          &:hover {
            color: #bf417b;
            text-decoration: underline;
          }
        }
        &:first-of-type {
          a {
            color: #bf417b;
            font-weight: 700;
          }
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
`;

export default Navbar;
