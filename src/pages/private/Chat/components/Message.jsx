import React, { useContext } from "react"
import AuthContext from "context/auth/authContext"
import styled from "styled-components"

const Container = styled.div`
  width: fit-content;
  background-color: #7ec6d2;
  padding: 15px;
  border-radius: 3px;
`

// const Img = styled.img`
//   position: absolute;
//   width: 30px;
//   height: 30px;
//   border-radius: 100px;
//   z-index: 999;
// `

const Message = ({ list }) => {
  const { user } = useContext(AuthContext)

  const renderHeader = (item) => {
    return (
      <span>
        <span>
          <b style={{ color: "#1e606b", fontSize: 14 }}>
            {item.user.first_name}
          </b>{" "}
        </span>
        <span style={{ color: "#1e606b", marginLeft: 6, fontSize: 14 }}>
          {item.time}
        </span>
      </span>
    )
  }

  // const renderHeader = item => {
  //   return <Img src={item.user.avatar} />
  // }

  // function for render multiples users and nest message for each user
  const conditionalHeader = (item, index, arr) => {
    if (index === 0) return renderHeader(item)

    const prevUser = arr[index - 1].user

    if (
      user.first_name === item.user.first_name &&
      user.first_name === prevUser.first_name
    )
      return null
    else if (
      user.first_name !== item.user.first_name &&
      prevUser.first_name === item.user.first_name
    )
      return null
    else return renderHeader(item)
  }

  return (
    <div className="row mb-3">
      <div className="col-md">
        {list.map((item, index, arr) => (
          <div
            key={index}
            className={`d-flex align-items-end ${
              user.first_name === item.user.first_name
                ? "justify-content-end text-right"
                : ""
            }`}
          >
            <Container className="mb-1">
              {conditionalHeader(item, index, arr)}
              <div style={{ color: "white" }}>{item.msg}</div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Message
