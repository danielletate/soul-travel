import styled from "styled-components";

function Statement() {
  return (
    <Section>
      <div className="text">
        <h1>Committed to making travel accessible to all </h1>
        <p>Creating experiences that will last a lifetime.</p>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .text {
    margin-top: 2rem;
    padding: 1rem;
    h1 {
      color: #2a2a2a;
      padding: 1rem;
    }
    p {
      color: #5b5b5b;
      padding: 1rem;
    }
  }
`;

export default Statement;
