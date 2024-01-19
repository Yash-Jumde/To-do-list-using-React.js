import React from "react";

function App() {
  const [inputText, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setInput(newText);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
