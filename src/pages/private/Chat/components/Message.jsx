import React, { useContext } from "react"
import AuthContext from "context/auth/authContext"
import styled from "styled-components"

const Container = styled.div`
  width: fit-content;
  background-color: white;
  padding: 15px;
  border-radius: 70px;
  padding-left: 35px;
  padding-right: 35px;
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
        <b style={{ color: "#4f585a", fontSize: 16 }}>
          {item.user.first_name}:
        </b>
        <br />
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
            <Container className="mb-2">
              <div style={{ color: "#a6a6a6" }}>
                {conditionalHeader(item, index, arr)}
                {item.msg}

                <span style={{ color: "#676868", marginLeft: 6, fontSize: 12 }}>
                  {item.time}
                </span>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Message
