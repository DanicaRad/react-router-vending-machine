import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {

  return (
    <div class='VendingMachine'>
      <Link className="itemLink" to='/cheetos'>Cheetos</Link>
      <Link className="itemLink" to='/gummy-bears'>Gummy Bears</Link>
      <Link className="itemLink" to='/la-croix'>La Croix</Link>
    </div>
  )
}

export default VendingMachine;

