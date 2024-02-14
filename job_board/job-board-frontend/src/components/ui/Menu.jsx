import styled from "styled-components";


const Menu = styled.ul`
  position: absolute;
  top: 5em;
  left: -200%;
  list-style: none;
  background-color: var(--text);
  padding: 1.5em;
  max-width: 200px;
  width: 100%;
  transition: all .3s linear;
  /* display: none; */

  &.opened {
    left: 0;
  }

  li:not(:nth-child(1)) {
    margin-top: 1.5em;
  }
  a {
    color: var(--accent);
    text-align: center;
  }

  @media (min-width: 768px) {
    position: static;
  top: 5em;
  left: -100%;
  list-style: none;
  background-color: transparent;
  padding: 0;
  max-width: initial;
  /* width: 100%; */
  /* transition: all .3s linear; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
  }
  li:not(:nth-child(1)) {
    margin-top: 0;
  }
  li:last-child {
    margin-left: auto;
    /* background-color: red; */
    a {
      background-color: var(--primary);
      color: var(--text);
      padding: .5em 2em;
      border-radius: 4px;
    }
  }

`

export default Menu;