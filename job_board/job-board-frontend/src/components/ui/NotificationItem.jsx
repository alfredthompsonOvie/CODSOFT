import { FaUserCircle } from "react-icons/fa"
import styled from "styled-components"

const StyledItem = styled.li`
  display: flex;
  gap: .5em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  /* background-color: red; */

  svg  {
    font-size: 4em;
  }

  p {
    font-size: .7rem;
  }

`
function NotificationItem() {
  return (
    <StyledItem>
      <FaUserCircle />
      <div>
        <h1>Dougles Ray</h1>
        <p>
        Applied for
          <span> IOS Developer</span>
        </p>
      </div>
    </StyledItem>
  )
}

export default NotificationItem
