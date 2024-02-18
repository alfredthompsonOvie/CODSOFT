import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Brand = styled(Link)`
  color: var(--primary);
  text-transform: uppercase;

  ${props => props.$footer && css`
    color: var(--text)
    /* margin: 1em 0; */
    /* display: inline-block; */
  `}
`

export default Brand;