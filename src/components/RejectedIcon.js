import React from "react";
import Avatar from "@material-ui/core/Avatar";
import StopIcon from "@material-ui/icons/Stop";

const RejectedIcon = () => (
  <Avatar>
    <StopIcon />
  </Avatar>
);

RejectedIcon.displayName = "RejectedIcon";

export default RejectedIcon;
