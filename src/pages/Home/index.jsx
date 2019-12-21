import React from "react";

import { DialogItem } from "components";

import "./Home.scss"

const Home = () => (
    <section className="home">
        <div className="dialogs">
            <DialogItem 
                user={{
                fullName: "Ivan Fedorovitch",
                isOnline: false
                }} 
                unreaded={99}
            />
            <DialogItem 
                user={{
                fullName: "Ivan Fedorovitch",
                isOnline: true
                }} 
                unreaded={5}
            />
        </div>
        {/* <Dialogs 
        items={[
            {
                user: {
                    fullName: "Ivan Fedorovitch",
                    avatar: null
                },
                message: {
                    text: "Some text in this message",
                    isReaded: false,
                    created_at: new Date()
                }
            }
        ]} /> */}
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