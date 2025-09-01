import React from "react";

const Header = (props) => {
  return (
    <div className="p-2">
      <div className="flex justify-between p-3">
        <h6>{props.title}</h6>
        <div className="flex gap-11">
          <p>{props.About}</p>
          <p>{props.Services}</p>
        </div>
      </div>
      <h2>Text analysers

      </h2>
      <input 
        className="h-24 w-96 border border-gray-400 p-2 rounded"
        placeholder="Enter text here..."
      />
      <button></button>
    </div>
  );
};

export default Header;
