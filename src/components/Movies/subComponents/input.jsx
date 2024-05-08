import React, { Component } from "react";

const Input = ({ label, value, name, type, onChnage }) => {
  return (
    <div className="form-group">
      <label for={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChnage}
        name={name}
        className="form-control"
        type={type}
        id={name}
      ></input>
    </div>
  );
};

export default Input;
