import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Services() {
  const data = [
    {
      icon: service1,
      title: "Best Price Guaranteed",
      subTitle:
        "Save when you pay through our app and gain points on every purchase.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "Committed to following all up to date covid protocols designated by the CDC.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        "We offer multiple payment plans affordable on nearly every budget.",
    },
    {
      icon: service4,
      title: "Dedicated Support",
      subTitle:
        "24/7 Customer service available via live chat and our toll-free phone number.",
    },
  ];

  return (
    <Card id="services">
      {data.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              <img src={service.icon} alt="service1" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Card>
  );
}

const Card = styled.div`
  margin: 0 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5rem 0;
  gap: 1.2rem;
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background-color: aliceblue;
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      margin-bottom: 2rem;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 720px) {
    html,
    body {
      padding: 0;
      margin: 0;
      overflow-x: hidden;
    }
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (max-width: 1080px) {
    html,
    body {
      padding: 0;
      margin: 0;
      overflow-x: hidden;
    }
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Services;
