import React from "react"
import styled from "styled-components"

const StuledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0px;
  padding-left: 15px;
  padding-bottom: 0px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 100px;
  &:focus {
    outline: none;
    border: 1px solid #d7d7d7;
  }
`

const Input = props => {
  return <StuledInput {...props} />
}

export default Input
