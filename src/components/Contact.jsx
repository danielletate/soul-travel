import styled from "styled-components";
import Map from "./Map";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mzboarqp");
  if (state.succeeded) {
    return <p>Thanks for Contacting us!</p>;
  }

  return (
    <Section id="contact">
      <div className="contactInfo">
        <h1>Contact Information</h1>
        <ul className="info">
          <li>Address: 123 Main Street, Suite 365 Denver, CO 80412</li>
          <li>Phone: +1.555.555.5555</li>
          <li>Email: info@soultravel.com</li>
          <li>Website: soultravel.com</li>
        </ul>
      </div>

      <div className="contact">
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mzboarqp"
          method="POST"
          name="contact-form"
          className="userInfo"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input type="email" name="email" placeholder="Your Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input type="text" name="text" placeholder="Subject" required />
          <ValidationError prefix="Text" field="text" errors={state.errors} />
          <input
            type="textarea"
            name="message"
            placeholder="Message"
            required
          />
          {/* Form Validation */}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            <a href="hero">Send Message</a>
          </button>
        </form>
        <div className="map">
          <Map />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  padding: 2rem;

  .contactInfo {
    text-align: center;
    margin: 2rem 0;
    padding: 1.5rem;
    h1 {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }
    .info {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 3rem;
      li {
        list-style: none;
        font-size: 0.8rem;
      }
    }
  }

  .contact {
    display: flex;
    justify-content: space-evenly;

    .userInfo {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 50%;
      input {
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: 0.5 #ededed solid;
        &:focus {
          outline: none;
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
        &:focus {
          outline: none;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Contact;
