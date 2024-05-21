import "./styles.css";
import { useState } from "react";

export default function App() {
  const [names, setNames] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const maxEntries = 10;

  const addName = () => {
    if (nameInput.trim() !== "" && names.length < maxEntries) {
      setNames([...names, nameInput]);
      setNameInput("");
    }
  };

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const submitAll = () => {
    // Your submit logic here
    console.log("Submitting names:", names);
  };

  return (
    <div className="container">
      <div className="countdown">
        <div id="days"></div>
        <div id="hours"></div>
        <div id="minutes"></div>
        <div id="seconds"></div>
      </div>
      <div className="left">
        <div id="header">
          <h1 id="header1">Welcome, Aryan</h1>
        </div>
        <div id="form">
          <form id="input-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="name-input"
              placeholder="Enter name"
              value={nameInput}
              onChange={handleNameInputChange}
            />
            <span id="entry-count">
              {names.length}/{maxEntries}
            </span>
            <button type="button" onClick={addName}>
              Add
            </button>
          </form>
        </div>
        <button id="submit-all-button" onClick={submitAll}>
          Submit
        </button>
      </div>
      <div id="table">
        <h2 className="table-title">Crush List</h2>
        <div className="table-wrapper">
          <table>
            <tbody id="name-list">
              {names.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
