import React from "react";
import { Icon, Input } from "antd";
import { Dialogs, Message, Status, Chatinput } from "components";

import "./Home.scss"

const Home = () => (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <Icon type="team" />
              <span>Список диалогов</span>
            </div>
            <Icon type="form" />
          </div>
          <div className="chat__sidebar-search">
            <Input.Search
              placeholder="Поиск среди контактов"
              onSearch={value => console.log(value)}
              style={{width: 200}}
            />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
                userId = {0}
                items={[
                    {
                        _id: "036E3491BA499DF64611C82B6BCDD37D",
                        text: "Some text in this message",
                        isReaded: false,
                        created_at: "Tue Dec 24 2019 22:38:44",
                        user: {
                            _id: "036E3491BA499DF64611C82B6BCDD37D",
                            fullName: "Ivan Fedorovitch",
                            avatar: null
                        },
                    },
                    {
                        _id: "76D572107F217D5B7B4329A6EB7B0F47",
                        text: "Hello kitty!",
                        isReaded: false,
                        created_at: "Tue Dec 17 2019 22:38:44",
                        user: {
                            _id: "76D572107F217D5B7B4329A6EB7B0F47",
                            fullName: "Cats",
                            avatar: "https://inteng-storage.s3.amazonaws.com/img/iea/4N610VqxGJ/sizes/cat-cloning_resize_md.jpg",
                            isOnline: true
                        },
                    },
                    {
                      "_id": "34b355345e60c5620e97504ff88868e7",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Thu Nov 09 1972 08:31:33 GMT+0000 (UTC)",
                      "user": {
                        "_id": "34b355345e60c5620e97504ff88868e7",
                        "fullName": "Pope Lindsey",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "80eafbd359da64601fb765ef9dcc6917",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Sun Jul 31 2011 00:05:33 GMT+0000 (UTC)",
                      "user": {
                        "_id": "80eafbd359da64601fb765ef9dcc6917",
                        "fullName": "Frazier Lambert",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "b230df4205f18d074ba95e66c8ea4838",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Fri May 17 2019 06:36:15 GMT+0000 (UTC)",
                      "user": {
                        "_id": "b230df4205f18d074ba95e66c8ea4838",
                        "fullName": "Felicia Trujillo",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "e967b0823f24afba70a7f890635fa3e6",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Sat May 04 1991 08:32:29 GMT+0000 (UTC)",
                      "user": {
                        "_id": "e967b0823f24afba70a7f890635fa3e6",
                        "fullName": "Kathie Livingston",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "e9304428e9db3e97af39537e01e9da70",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Wed May 29 1996 15:03:24 GMT+0000 (UTC)",
                      "user": {
                        "_id": "e9304428e9db3e97af39537e01e9da70",
                        "fullName": "Barbra Stout",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "852dfbee5d57c335beffdeb2db78a3d7",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Thu Oct 22 1998 15:59:39 GMT+0000 (UTC)",
                      "user": {
                        "_id": "852dfbee5d57c335beffdeb2db78a3d7",
                        "fullName": "Blackwell Alexander",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "c5acbd9cc794556c7257826c734a8a9b",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Fri Dec 10 1976 07:17:54 GMT+0000 (UTC)",
                      "user": {
                        "_id": "c5acbd9cc794556c7257826c734a8a9b",
                        "fullName": "Cannon Soto",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "9762a3b5c5ee633ccea376b8377b12bc",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Mon May 07 2001 08:29:10 GMT+0000 (UTC)",
                      "user": {
                        "_id": "9762a3b5c5ee633ccea376b8377b12bc",
                        "fullName": "Minerva Lane",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "0c39b9617382cc6f84cc4461e70dddbc",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Mon Mar 11 1985 18:19:09 GMT+0000 (UTC)",
                      "user": {
                        "_id": "0c39b9617382cc6f84cc4461e70dddbc",
                        "fullName": "Miranda Curry",
                        "avatar": null
                      }
                    },
                    {
                      "_id": "e7e9aeda0b56c2a376cdce2d4bdaae90",
                      "text": "<TypeError: loremIpsum is not a function>",
                      "created_at": "Fri Nov 28 2008 18:37:06 GMT+0000 (UTC)",
                      "user": {
                        "_id": "e7e9aeda0b56c2a376cdce2d4bdaae90",
                        "fullName": "Avila Cox",
                        "avatar": null
                      }
                    }
                ]} />
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
            <Icon type="ellipsis" style={{fontSize: "22px"}} />
          </div>
          <div className="chat__dialog-messages">
            <Message
                avatar="https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                date= {new Date(2014, 1, 2)}
                audio="https://notificationsounds.com/soundfiles/13f3cf8c531952d72e5847c4183e6910/file-c2_men-laughing.mp3"
            />
            <Message
                avatar="https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" text="Hello Bro"
                date= {new Date(2014, 6, 2)}
                isMe={true}
                isReaded={true}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
                    },
                    {
                        filename: 'image.jpg',
                        url: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    }, {
                        filename: 'image.jpg',
                        url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                    },

                ]}
            />
            <Message
                avatar="https://images.unsplash.com/photo-1576663602531-cf0acdeb3efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                isTyping
            />
            <Message
                avatar="https://images.unsplash.com/photo-1576663602531-cf0acdeb3efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
                    }

                ]}
            />
          </div>
          <div className="chat__dialog-input">
            <Chatinput />
          </div>
        </div>
      </div>
    </section>
);


export default Home;
