import React from "react";
import { Button } from "antd";
import { Status, Chatinput } from "components";
import { Messages, Dialogs } from "containers";

import "./Home.scss"

const Home = () => (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <Button type="link" shape="circle" icon="team" />
              <span>Список диалогов</span>
            </div>
            <Button type="link" shape="circle" icon="form" />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
                userId = {0}
                 />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-username">Юлий Цезарь</b>
              <div className="chat__dialog-status">
                <Status online />
              </div>
            </div>
            <Button type="link" shape="circle" icon="ellipsis" style={{fontSize: "22px"}}  />

          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <Chatinput />
          </div>
        </div>
      </div>
    </section>
);


export default Home;
