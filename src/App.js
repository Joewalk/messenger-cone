import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    // Saving messages to firestore
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // set messages
    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  useEffect(() => {
    // Getting All messages form database
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please Enter Your Name"));
  }, []);

  return (
    <div className="app">
      <h1>Let's Build Messenger Clone</h1>
      <h3>welcome: {username}</h3>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__button"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <div className="msg__card">
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
