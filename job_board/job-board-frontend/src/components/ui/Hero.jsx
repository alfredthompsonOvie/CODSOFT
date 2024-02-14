import styled from "styled-components";

const Hero = styled.section`
  background-image: url("../../assets/images/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  grid-column: 1/-1;
  min-height: calc(100dvh - 5em);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
`

export default Hero;