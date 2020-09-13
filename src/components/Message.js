import React, { forwardRef } from "react";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`msg ${isUser && "msg__user"}`}>
      <h3>
        <span className="msg__name">
          {!isUser && `${message.username || "unknown user"}: `}
        </span>
        <span className="msg__text">{message.message}</span>
      </h3>
    </div>
  );
});

export default Message;
