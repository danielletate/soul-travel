import styled from "styled-components";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <FooterContainer>
      <footer class="footer-flex">
        <div class="footer-left">
          <div className="logo">
            <img src={logo} alt="footer-logo" />
          </div>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Destinations</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">
            Copyright &copy; 2022 Soul Travel. All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div className="address">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            </div>
            <p>
              <span>123 Main Street, Suite 365 </span> Denver, CO 80412
            </p>
          </div>

          <div className="phone">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </div>
            <p>+1.555.555.5555</p>
          </div>

          <div className="email">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </div>
            <p>
              <a href="mailto:info@soultravel.com"> info@soultravel.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About our company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-flex {
    display: flex;
    background: #666;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    padding: 5rem 3rem;
    .footer-left {
      width: 40%;
      .logo {
        img {
          margin-top: -4rem;
          cursor: pointer;
        }
      }
      .footer-links {
        color: #ffffff;
        margin: 3rem 0;
        a:before {
          content: "|";
          font-weight: 300;
          font-size: 20px;
          left: 0;
          color: #fff;
          display: inline-block;
          padding-right: 5px;
        }
        a {
          display: inline-block;
          line-height: 1.8;
          font-weight: 400;
          text-decoration: none;
          color: inherit;
        }
        .link-1 {
          :before {
            content: none;
          }
        }
      }
      .footer-company-name {
        margin-bottom: -2rem;
        color: #222;
        font-size: 14px;
        font-weight: normal;
      }
    }
    .footer-center {
      color: #ffffff;
      font-weight: 400;
      width: 35%;
      p {
        margin: 0.7rem 0 0 0.5rem;
      }
      .icon {
        background-color: #33383b;
        color: #ffffff;
        font-size: 25px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 42px;
        margin: 10px 15px;
        vertical-align: middle;
        font-size: 17px;
        line-height: 38px;
        cursor: pointer;
      }
      .address,
      .phone,
      .email {
        display: flex;
      }
      .email {
        margin-top: 1rem;
        p {
          a {
            color: #8cd9d1;
            text-decoration: none;
          }
        }
      }
      .address {
        p {
          span {
            display: block;
            font-weight: normal;
            font-size: 14px;
            line-height: 2;
          }
        }
      }
    }
    .footer-right {
      width: 20%;
      .footer-company-about {
        line-height: 20px;
        color: #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
      }
      .footer-company-about span {
        display: block;
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .footer-icons {
        margin-top: 25px;

        a {
          display: inline-block;
          width: 35px;
          height: 35px;
          cursor: pointer;
          background-color: #33383b;
          border-radius: 2px;
          font-size: 1.2rem;
          color: #ffffff;
          text-align: center;
          line-height: 1.7;
          margin-right: 0.5rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
