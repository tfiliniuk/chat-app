import React from "react";
import classNames from "classnames";
import { Time, IconReaded, Avatar } from  "../";
import { format } from "date-fns";

import isToday from "date-fns/isToday";

// import "./DialogItem.scss";

const getMessageTime = created_at => {
    if(isToday(created_at)) {
        return format( new Date(created_at), 'kk:mm');
    } else {
      return format( new Date(created_at), 'dd.MM.yyyy');
    }
}

const DialogItem = ({user, message, unreaded, isMe}) => (
    <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
        <div className="dialogs__item-avatar">
            <Avatar user={user}/>
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullName}</b>
                <span>
                     {/* <Time date={message.created_at} /> */}
                     {getMessageTime(message.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{message.text}</p>
                { isMe && <IconReaded isMe={true} isReaded={false} />}
                 {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>}
            </div>
        </div>
    </div>
);


export default DialogItem;
