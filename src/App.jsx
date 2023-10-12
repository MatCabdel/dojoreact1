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

  function total() {
    let totalLikes = 0;
    list.forEach((user) => {
      if (user.like) {
        totalLikes += 1;
      }
    });
    console.log(totalLikes);
    return totalLikes;
  };
  console.log(list);


  return (
    <div>
      <h1>Aimez-vous React ?</h1>
      {list.map((user, index) => (
        <Line user={user} handleClick={handleClick} />
      ))}
      <div>
        <h2>Total d'aubergines : {total()} </h2>
      </div>
    </div>
  );
}

export default App;
