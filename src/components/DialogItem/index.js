import React from "react";
import classNames from "classnames";
import { IconReaded, Avatar } from  "../";
import { format, parseISO } from "date-fns";

import isToday from "date-fns/isToday";

// import "./DialogItem.scss";

const getMessageTime = created_at => {
  let date = parseISO(new Date(created_at).toISOString());
    if(isToday(date)) {
        return format( date, 'kk:mm');
    } else {
      return format(date, 'yyyy-LL-dd');
    }
}

const DialogItem = ({
  _id,
  user,
  message,
  unreaded,
  isMe,
  currentDialogId,
  onSelect
}) => (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline,
        "active": currentDialogId === _id
      })}
      onClick={onSelect.bind(this, _id)}
      >
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
