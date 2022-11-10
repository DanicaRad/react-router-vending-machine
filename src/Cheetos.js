import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "./Item.css"

const Cheetos = () => {
  return (
    <div className="Item">
      <Link to='/'><button>Back</button></Link>
      <Container>
        <h3>Cheetos</h3>
        <img src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00028400409056/47506ee7ada9ce3bc8864b07a57adac6_large.png&width=512&type=webp&quality=90" alt="cheetos"></img>
      </Container>
    </div>
  )
}

export default Cheetos;