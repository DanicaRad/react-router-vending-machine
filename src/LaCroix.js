import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "./Item.css"

const LaCroix = () => {
  return (
    <div className="Item">
      <Link to='/'><button>Back</button></Link>
      <Container>
        <h3>La Croix</h3>
        <img src="https://www.thebubbleverse.com/wp-content/uploads/2021/04/La-Croix-Guava-Sao-Paulo.png" alt="la croix"></img>
      </Container>
    </div>
  )
}

export default LaCroix