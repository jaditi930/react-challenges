// remove/replace this with your implementation
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const Notifications = ({ type, message }) => {
    return (
      <div
        className="notifications"
        style={{
          border: `2px solid ${
            type === "SUCCESS"
              ? "#2ecc71"
              : type === "ERROR"
              ? "#e74c3c"
              : type === "INFO"
              ? "#3498db"
              : "#F1C40F"
          }`,
        }}
      >
        {message}
      </div>
    );
  };

  const NotificationContainer = () => (
    <div className="ncontainer">
      {notifications.map((notification, index) => {
        return (
          <Notifications
            key={index}
            type={notification.type}
            message={notification.message}
          />
        );
      })}
    </div>
  );

  return {
    showNotification: ({ type, message }) => {
      setNotifications([...notifications, { type: type, message: message }]);
    },
  };
};
