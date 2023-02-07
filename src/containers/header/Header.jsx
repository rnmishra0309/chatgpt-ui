import React from "react";
import { AvatarGroup, Avatar } from "@mui/material";
import ai from "../../assets/ai_11zon.png";
import "./header.css";

const Header = ({ people }) => {
  const avatarList = []
  people.forEach(element => {
    avatarList.push(
      <Avatar alt={element.name.first} src={element.picture.thumbnail} key={element.login.uuid} />
    )
  });
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-container">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-container__sign">
          <input placeholder="Your E-mail Address" type="email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-container__people">
          <AvatarGroup max={5}>
            {avatarList}
          </AvatarGroup>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-ai">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
