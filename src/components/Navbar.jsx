import styled from "styled-components";
import logo from "../assets/logo.png";

function Navbar() {
  // Mobile Navbar Toggle
  const handleToggle = () => {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
  };

  return (
    <>
      <Nav>
        {/* Navbar Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Navbar Links */}
        <ul className="nav-links">
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

        {/* Hamburger Menu */}
        <div className="burger" onClick={handleToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  background-color: #8cd9d1;
  border-bottom: 2px solid #666;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-links {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    list-style: none;
    li {
      a {
        text-decoration: none;
        letter-spacing: 0.1rem;
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
  .burger {
    display: none;
    cursor: pointer;
    div {
      height: 0.2rem;
      width: 1.5rem;
      background-color: #f45da5;
      margin: 0.4rem;
    }
  }
  .nav-active {
    transform: translateX(0%);
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    html,
    body {
      padding: 0;
      margin: 0;
      overflow-x: hidden;
    }
    .nav-links {
      position: absolute;
      right: 0px;
      height: 92vh;
      top: 8vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      li {
        opacity: 0;
      }
    }
    .burger {
      display: block;
    }
  }
  @media screen and (max-width: 1024px) {
    .nav-links {
      gap: 1rem;
      li {
        a {
          letter-spacing: 0;
        }
      }
    }
  }
`;

export default Navbar;
