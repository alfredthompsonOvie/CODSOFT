import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const CtaLink = styled(Link)`
  padding: .5em 2em;
  border-radius: 4px;
  color: var(--text);
  text-align: center;

  ${props => props.$cta__primary && css`
    background-color: var(--primary)
  `}
  ${props => props.$cta__alt && css`
    background-color: var(--secondary)
  `}
  ${props => props.$register && css`
    background-color: transparent;
    border: 1px solid var(--background);
    color: var(--background);
    display: inline-block;

    margin-top: 1em;
  `}
`

export default CtaLink