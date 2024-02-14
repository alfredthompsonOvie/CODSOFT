import styled, {css} from "styled-components";

const Header = styled.header`
  ${props => props.$dashboard && css`
    grid-row: 1;
    grid-column: 1/-1;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
    /* background-color: #444; */
  `}

`

export default Header;