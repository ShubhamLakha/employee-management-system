import React from "react";

export default function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{marginTop:'30px', marginBottom:'18px'}}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add button
        </button>
      </div>
    </header>
  );
}
