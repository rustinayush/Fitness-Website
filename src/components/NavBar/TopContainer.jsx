import React from "react";

const TopContainer = () => {
  const topBarStyle = {
    backgroundColor: "#5c8235",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  return (
    <div style={topBarStyle}>
      Get 10% off on your first order! Use the code 'Welcome 10'.
    </div>
  );
};

export default TopContainer;