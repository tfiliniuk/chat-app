import React from "react";

import { Message } from "components";

import "./Home.scss"

const Home = () => (
    <section className="home">
        <Message 
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
                },{
                    filename: 'image.jpg',
                    url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                },

            ]}
         />
        <Message 
            avatar="https://images.unsplash.com/photo-1576663602531-cf0acdeb3efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" text="Hello Bro" 
            date="Thu Dec 19 2019 12:33:47" 
            isMe={false}
            isReaded={true}
        />
    </section>
);


export default Home;