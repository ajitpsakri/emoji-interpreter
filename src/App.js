import React, { useState } from "react";
import "./styles.css";
import emojiDoc from "./emojiDoc";

export default function App() {
  //Declaring States
  const [meaning, setMeaning] = useState("Select Emoji");
  const [emoji, setEmoji] = useState(" ");
  // Display emoji + it's meaning
  const handleInput = (event) => {
    let currentValue = event.target.value;
    if (!emojiDoc.hasOwnProperty(currentValue) && currentValue !== "") {
      setMeaning("This is not found in our Database");
      setEmoji("");
    } else if (currentValue === "") {
      setMeaning("Select Emoji");
      setEmoji("");
    } else {
      setMeaning(emojiDoc[event.target.value]);
      setEmoji(event.target.value);
    }
  };
  //Handle emoji click + display clicked emoji's meaning
  const handleEmojiClick = (displayEmoji) => {
    setEmoji(displayEmoji);
    setMeaning(emojiDoc[displayEmoji]);
  };

  return (
    <div className="App">
      <div className="container-center">
        <h1>Emoji interpreter</h1>
        {/* input */}
        <input type="text" placeholder="Paste emoji" onChange={handleInput} />
        <h2>
          {emoji} {meaning}
        </h2>
        <ul>
          {Object.keys(emojiDoc).map((ele) => {
            return (
              <li key={ele} onClick={() => handleEmojiClick(ele)}>
                {ele}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
