import { useState } from "react";
import "./App.css";
import Line from "./components/Line.jsx";

const initialList = [
  {
    name: "Totor",
    like: true,
  },
  {
    name: "Lucas",
    like: true,
  },
  {
    name: "Nel",
    like: true,
  },
  {
    name: "Mathiou",
    like: false,
  },
  {
    name: "Raph",
    like: true,
  },
];

function App() {
  const [list, setList] = useState(initialList);

  const handleClick = (user) => {
    //setList(!(list[index].like));
    const newValue = { name: user.name, like: !user.like };
    setList(
      list.map((u) => {
        return u.name === user.name ? newValue : u;
      })
    );
  };

  const totalLikes = list.forEach()

  return (
    <div>
      <h1>Aimez-vous React ?</h1>
      {list.map((user, index) => (
        <Line user={user} handleClick={handleClick} />
      ))}
      <div>
        <h2>Total d'aubergines : </h2>
      </div>
    </div>
  );
}

export default App;
