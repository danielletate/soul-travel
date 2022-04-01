import styled from "styled-components";
import avatarImg1 from "../assets/avatar1.jpg";
import avatarImg2 from "../assets/avatar2.jpg";
import avatarImg3 from "../assets/avatar3.jpg";

function Testimonials() {
  return (
    <Section>
      <div className="about" id="testimonials">
        <h1>Why Choose Us?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          dignissimos minus autem pariatur architecto nihil voluptatibus
          repellat, debitis qui? Soluta inventore impedit provident explicabo
          illo accusantium voluptas fugiat quibusdam eos!
        </p>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            repellendus.
          </p>
          <div className="info">
            <img src={avatarImg1} alt="" />
            <div className="details">
              <h4>Jane Wilson</h4>
              <p>Junior Web Developer</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            repellendus.
          </p>
          <div className="info">
            <img src={avatarImg2} alt="" />
            <div className="details">
              <h4>Lydia Parker</h4>
              <p>Cloud Computing Engineer</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            repellendus.
          </p>
          <div className="info">
            <img src={avatarImg3} alt="" />
            <div className="details">
              <h4>Harry Klein</h4>
              <p>Systems Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  background-color: #f45da5;
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  .about {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 2.5rem;
    color: #ffffff;
    line-height: 1.8;
    h1 {
      margin-bottom: 2rem;
    }
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 2rem;
    gap: 2rem;
    .testimonial {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 50%;
          height: 100px;
          width: 75px;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
