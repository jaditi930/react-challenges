import React, { createContext } from "react";

const NotificationContext = createContext({});

const NotificationsProvider = () => {
  return <NotificationContext value={{ hello: "Word" }}></NotificationContext>;
};

export default NotificationsProvider;
