import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";

// class Dialogs extends React.Component {
//   componentDidUpdate(prevProps) {
//     const {fetchMessages, currentDialogId} = this.props;
//     if(prevProps.currentDialogId !== this.props.currentDialogId) {
//       fetchMessages(currentDialogId);
//     }
//   }
//   render() {
//     const {items} = this.props;
//     return <BaseMessages items={items} />
//   }
// }


const Dialogs = ({ fetchMessages, currentDialogId, items, isLoading}) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if(currentDialogId) {
      fetchMessages(currentDialogId);
    }
  },[currentDialogId, fetchMessages]);

useEffect(() => {
  if(messagesRef.current) {
    messagesRef.current.scrollTo(0, 9999);
  }
})
  return (
    <BaseMessages
      items={items}
      isLoading={isLoading}
      blockRef={messagesRef}
   />
 );
};

export default connect(({ dialogs, messages }) => ({
  currentDialogId: dialogs.currentDialogId,
  items: messages.items,
  isLoading: messages.isLoading
}),
messagesActions
)(Dialogs);
