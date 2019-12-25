import React, { useState } from "react";
import classeNames from "classnames";
import { Icon, Input } from "antd";

import "./Chatinput.scss";

const Chatinput = props => {
  const [value, setValue] = useState('');
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Icon type="smile" />
      </div>
      <Input onChange={e => setValue(e.target.value)} size="large" placeholder="Введите текст сообщения" />
      <div className="chat-input__actions">
        <Icon type="camera" />
        {value ? <Icon type="check-circle" /> : <Icon type="audio" />}
      </div>
    </div>
  )
}

export default Chatinput;
