import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import "./assets/george.jpg";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=4006u=b71527e605ae1b748fc2d4157a842e57e427ad446v=4"
        title="Sonny Sangha"
      />

      <Story
        image="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Random Person"
      />
      <Story
        image="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="another random person"
      />
      <Story
        image="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="another random person"
      />
      <Story
        image="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="another random person"
      />
    </div>
  );
}

export default StoryReel;
