import React, { useState } from "react";
import "./index.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",  
  "🥰": "smiling face with hearts",  
  "😂": "face with tear and joy", 
  "😉": "winking face",   
  "🤔":"thinking",
  "😴": "sleeping"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // console.log(meaning);
    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to output
  }

  return (
    <div className="App">
      <h1>inside out</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      {/* Actual output set by react using useState */}
      <h3>emojis we know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/*
 * THINGS TO NOTICE:
 *class-->className
 *style -->takes instead of ""
 *onClick takes function
 *see likeCounter counts in console by inspect
 */
