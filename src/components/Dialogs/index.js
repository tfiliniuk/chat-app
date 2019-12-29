import React from "react";
import { Input, Empty } from "antd";
import orderBy from "lodash/orderBy";

import { DialogItem } from "../";

import "./Dialogs.scss";


const Dialogs = ({items, userId, onSearch, inputValue, currentDialogId, onSelectDialog}) => (
    <div className="dialogs">
      <div className="dialogs__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={e=> onSearch(e.target.value)}
          value={inputValue}
        />
      </div>
        { items.length ? orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
              key={item._id}
              user={item.user}
              message={item}
              unreaded={0}
              isMe={item.user._id === userId}
              onSelect={onSelectDialog}
              currentDialogId={currentDialogId}
              {...item}
            />
        )) :
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
      }
    </div>
);


export default Dialogs;
