import React from "react";
import "./Style.css";

// The row class sets everything in flex one line, we need to add space!
// Let's use React.CloneElement & React.Children functions
/* --- The plain old way
const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};
--- */

const Row = ({ children }) => {
  return (
    <div className="row">
      {React.Children.map(children, (child, index) => {
        return child;
      })}
    </div>
  );
};
export default function LiveOrders() {
  return (
    <div>
      <h3>Delving Deep into JSX World!</h3>
      <Row>
        <p>Margeretta</p>
        <p>Quanity 2</p>
        <p>4.3 USD</p>
        <p>With Toppings</p>
        <p>18:30 pm</p>
      </Row>
    </div>
  );
}
