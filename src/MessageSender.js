import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider"
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{user},dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('')
    setImageUrl('')
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoUrl}/>
        <form>
          <input
            value={input}
            className="messageSender__input"
            placeholder={`Whats on your Mind? ${user.displayName}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <input placeholder="imgae URL (optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}r/>
          <button onClick={handleSubmit} type="submit">
            submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
