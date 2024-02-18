/* eslint-disable react/prop-types */

import styled from "styled-components"
import TaskItem from "./TaskItem"

const StyledUl = styled.ul`
  
`

function Tasks({tasks}) {
  return (
    <StyledUl>
      <TaskItem />
      {/* <TaskItem />
      <TaskItem /> */}
    </StyledUl>
  )
}

export default Tasks
