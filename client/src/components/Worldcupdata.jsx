import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";



export default class WorldcupData extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response);
      console.log(response.data);
      this.setState({ players: response.data });
    });
  }

  render() {
    return (
      <DivStyled className="players">
        {this.state.players.map(player => {
          return <Card player={player} />;
        })}

      </DivStyled>
    );
  }
}

const DivStyled = styled.div`
  border: 1px solid palevioletred;
  margin: 20px 20px;
  padding: 20px 20px;
  .list {
    margin: 10px;
  }
`;