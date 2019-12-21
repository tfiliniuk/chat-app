import React from "react";
import classNames from "classnames";
import { Time, IconReaded } from  "../";

import "./DialogItem.scss";

const getAvatar = avatar => {
    if(avatar) {
        return <img src="https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />
    } else {
        // return makeavatar
    }
}

const DialogItem = ({user, message, unreaded}) => (
    <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
        <div className="dialogs__item-avatar">
            {getAvatar("https://images.unsplash.com/photo-1576657370318-135eabf07f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80")}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Ivan Fedorovitch</b>
                <span>
                    {/* <Time date={new Date()} /> */}
                    13:03
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>Some text in this message</p>
                <IconReaded isMe={true} isReaded={false} />
                 {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>}
            </div>
        </div>
    </div>
);


export default DialogItem;