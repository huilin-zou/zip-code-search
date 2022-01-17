import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState();

  const zipInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const list = { input };
      const resp = await fetch(
        `http://ctp-zip-api.herokuapp.com/zip/${input}`,
        {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
          },
          list: JSON.stringify(list),
        }
      );
      console.log(resp.url);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="App">
      <form
        onSubmitForm={onSubmitForm}
        style={{ display: "block", paddingLeft: "500px", paddingTop: "200px" ,display: 'flex',
          alignJustify: 'center'
      }}
      >
        <input
          style={{ width: "200px", height: "50px",fontSize:'20px', color: "white" }}
          class="form-control"
          placeholder="Zip Code Search"
          type="number"
          value={input}
          onChange={zipInput}
        ></input>

        <div className="col-2">
        <button onClick={onSubmitForm}  style={{ height: "50px",fontSize:'20px',color:'white'}} >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default App;
