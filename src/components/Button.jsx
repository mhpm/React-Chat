import React from "react"
import styled, { css } from "styled-components"

const StuledButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 0px;
  padding-right: 2px;
  padding-bottom: 0px;
  border: none;
  border-radius: 100px;
  color: white;
  float: right;

  &:focus {
    outline: none !important;
  }

  &:active {
    opacity: 80%;
  }

  ${(props) =>
    props.primary &&
    css`
      background-image: linear-gradient(120deg, #fbac4a 0%, #f26535 100%);
    `};
  ${(props) =>
    props.dark &&
    css`
      background-image: linear-gradient(120deg, #6f6f6f 0%, #4d4d4d 100%);
    `};
`

const Button = (props) => {
  return <StuledButton {...props} />
}

export default Button
