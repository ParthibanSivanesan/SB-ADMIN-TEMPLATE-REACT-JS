import "./App.css";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

function App() {
  const [username, setUser] = useState("Default User");
  return (
    <div>
      <Dashboard username={username} setUser={setUser} />
    </div>
  );
}

export default App;
