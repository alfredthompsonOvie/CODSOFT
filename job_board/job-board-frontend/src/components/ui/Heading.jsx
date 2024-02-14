import styled, {css} from "styled-components";

const Heading = styled.h1`
  font-size: 2rem;

  ${props=> props.$hero && css`
    /* color: blue; */
    margin-bottom: .5em;
  `}
  ${props=> props.$HowItWorks && css`
    text-align: center;
    margin-bottom: 2em;
    letter-spacing: 2px;
  `}
  ${props=> props.$cardHeading && css`
    font-size: 1.5rem;
    margin: .5em 0;
  `}
  ${props=> props.$register && css`
    font-size: clamp(1.5rem, 8vw, 2rem);
    margin: .5em 0;
  `}
  ${props=> props.$dashboardSectionHeader && css`
    font-size: 1rem;
    padding-bottom: 0em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5em;

    svg {
      font-size: 1.5rem;
    }

    button {
      margin-left: auto;
    }
  `}
`

export default Heading;