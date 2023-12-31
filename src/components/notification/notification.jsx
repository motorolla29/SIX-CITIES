import React, { useEffect, useState } from "react";
import { func, string } from "prop-types";

import { NOTIFICATION_HIDE_TIMEOUT } from "../../const";

function Notification({ message, onTransitionEnd }) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsHiding(true), NOTIFICATION_HIDE_TIMEOUT);
    return () => onTransitionEnd();
  }, [onTransitionEnd]);

  return (
    <h3
      className={`notification ${isHiding ? "notification--hiding" : ""}`}
      onTransitionEnd={onTransitionEnd}
    >
      {message}
    </h3>
  );
}

Notification.propTypes = {
  message: string.isRequired,
  onTransitionEnd: func.isRequired,
};

export default Notification;
