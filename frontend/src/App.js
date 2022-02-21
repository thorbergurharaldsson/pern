import { useEffect, useState, React } from "react";
import "./App.css";

const App = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = async () => {
      const res = await fetch("http://localhost:5001");
      const data = await res.json();
      console.log(data);

      setGreeting(data[0].greeting);
    };
    getGreeting();
  }, []);
  return <div className="greeting"> {greeting}</div>;
};

export default App;
