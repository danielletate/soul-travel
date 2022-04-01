import styled from "styled-components";

function Newsletter() {
  return (
    <Section>
      <div className="content">
        <h1>Subscribe to our Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex
          sapiente voluptate recusandae nihil. Voluptate?
        </p>
        <form>
          <input placeholder="Enter your email" type="email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Section>
  );
}

const Section = styled.div`
  margin: 5rem auto;
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 2rem;
      font-weight: 500;
      padding: 2rem 2rem 1.5rem 2rem;
    }
    p {
      padding: 0 2rem 3rem 2rem;
    }
    form {
      margin: 2rem auto;
      input {
        background-color: #f8faff;
        padding: 1rem 3rem;
        border: 1px solid #565656;
        color: #565656;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 1rem 1.5rem;
        background: none;
        border: 1px solid #565656;
        color: #565656;
        cursor: pointer;
      }
    }
  }
`;

export default Newsletter;
