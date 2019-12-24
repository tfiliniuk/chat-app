import React from "react";
import { Dialogs, Message } from "components";

import "./Home.scss"

const Home = () => (
    <section className="home">
        <Dialogs
            userId = {0}
            items={[
                {
                    _id: "2C42E5CF1CDBAFEA04ED267018EF1511",
                    text: "Some text in this message",
                    isReaded: false,
                    created_at: new Date(2019, 1, 10),
                    user: {
                        _id: "2C42E5CF1CDBAFEA04ED267018EF1511",
                        fullName: "Ivan Fedorovitch",
                        avatar: null
                    },
                },
                {
                    _id: "2C42E5CF1CDBAFEA04ED267018EF1511",
                    text: "Hello kitty!",
                    isReaded: false,
                    created_at: new Date(),
                    user: {
                        _id: "2C42E5CF1CDBAFEA04ED267018EF1511",
                        fullName: "Cats",
                        avatar: "https://inteng-storage.s3.amazonaws.com/img/iea/4N610VqxGJ/sizes/cat-cloning_resize_md.jpg",
                        isOnline: true
                    },
                }
            ]} />

              <Message
                  avatar="https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                  date={new Date(2016, 2, 1)}
                  audio="https://notificationsounds.com/soundfiles/13f3cf8c531952d72e5847c4183e6910/file-c2_men-laughing.mp3"
              />
        {/* <Message
            avatar="https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" text="Hello Bro"
            date="Sun Apr 21 2019 21:30"
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
        /> */}
    </section>
);


export default Home;
