import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "./Item.css"

const GummyBears = () => {
  return (
    <div className="Item">
      <Link to='/'><button>Back</button></Link>
      <Container>
        <h3>Gummy Bears</h3>
        <img src="https://i5.walmartimages.com/asr/88fff16d-c2df-40cc-b369-56396c608061_1.28870df7c0df6d6d543c8f3fbd024c6d.jpeg" alt="gummy bears"></img>
      </Container>
    </div>
  )
}

export default GummyBears;