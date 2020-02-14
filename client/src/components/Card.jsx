import React from "react";
import styled from "styled-components";

const Card = props => {
  const { name, country, searches } = props.player;
  return (
    <StyledDiv>
      <h1>{name}</h1>
      <h3>country: {country}</h3>
      <h3>Google searches:{searches}</h3>
    </StyledDiv>
  );
};
export default Card;



// styling
const StyledDiv = styled.div`
  display:flex;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  margin: 20px auto;
  width: 63%;
  border:  2px solid;
  color: palevioletred;
  background-color: white;

  height: auto;
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.8), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
