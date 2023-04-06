import logo from "./logo.svg";
import "./App.css";

import SwaggerClient from "swagger-client";
function App() {
  async function testSwagger() {
    const client = await SwaggerClient({
      url: "http://localhost:3000/api-json",
    });

    const response = await client.default.getSomeData({ id: 123 });
    console.log(client);
  }
  testSwagger();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>***************</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
