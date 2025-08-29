import React from "react";

const Header = ({ title, About, Services }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{About}</p>
      <p>{Services}</p>
    </div>
  );
};

export default Header;
