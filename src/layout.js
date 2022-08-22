import React from "react";
import Flexbox from "react-flexbox";

const Card = () => (
  <div style={{ backgroundColor: "wheat", margin: 10, height: 30, width: 90 }} />
)

const Layout = () => (
  <Flexbox
    height="100vh"
    style={{
      backgroundColor: "rebeccapurple",
      flexDirection: "column",
      paddingRight: "50px",
      paddingBottom: "50px"
    }}
  >
    <Flexbox height="135px" style={{ backgroundColor: "tomato" }} />
    <Flexbox flex="1 1 auto" style={{ backgroundColor: "aqua" }}>
      <Flexbox style={{ backgroundColor: "goldenrod" }} width="150px" />
      <Flexbox flex="1 1 auto" style={{ backgroundColor: "#222" }}>
        <Flexbox flex="1 1 auto" style={{ backgroundColor: "#444", flexDirection: "column" }}>
          <Flexbox height="48px" style={{ backgroundColor: "#888" }} />
          <Flexbox style={{ backgroundColor: "dodgerblue" }}>
            <Flexbox style={{ flexWrap: "wrap" }}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Flexbox>
          </Flexbox>
        </Flexbox>
        <Flexbox style={{ backgroundColor: "#666" }} width="380px" />
      </Flexbox>
    </Flexbox>
  </Flexbox>
);

export default Layout;
