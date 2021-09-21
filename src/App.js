import React, { useState } from "react";
import "./styles.css";

var name = "To know about emoji";

// shoppingList = ['egg', 'bread', 'peanutbutterr', 'cheese']

const emojiDictionary = {
  "😀": "smile",
  "🙁": "Sad",
  "😋": "testy",
  "🙃": "ulta",
  "😂": "laughing",
  "😭": "Crying",
  "😍": "Loving",
  "😴": "Sad",
  "😇": "angel",
  "😈": "Devil",
  "👋": "hi"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiSeen(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have in our database";
    }

    setMeaning(meaning);
  }

  function emojihandlerClick(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "green" }}>Welcome ! {name}</h1>

      <input placeholder="paste your emoji" onChange={emojiSeen} />
      <h2> {meaning}</h2>
      <h3> Click on Below emoji</h3>

      {emojiList.map((item) => {
        return (
          <span
            onClick={() => emojihandlerClick(item)}
            style={{ fontSize: "2rem", padding: "1.2rem" }}
            key={"item"}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
