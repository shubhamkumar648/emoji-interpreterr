import React, { useState } from "react";
import "./styles.css";

var name = "Shubham";

// shoppingList = ['egg', 'bread', 'peanutbutterr', 'cheese']

const emojiDictionary = {
  "😀": "smile",
  "🙁": "Sad",
  "😋": "testy",
  "🙃": "ulta"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiSeen(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);
  }

  function emojihandlerClick(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "green" }}>Welcome ! {name}</h1>

      <input onChange={emojiSeen} />
      <h2> {meaning}</h2>
      <h3>Emoji we know</h3>

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
