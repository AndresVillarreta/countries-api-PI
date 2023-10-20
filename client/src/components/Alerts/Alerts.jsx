import alerts from "./Alerts.module.css";
import { useState } from "react";

export function Alerts(props) {
  if (props.type === "error") {
    return <div className={alerts.error}>{props?.message}</div>;
  }
  if (props.type === "success") {
    return <div className={alerts.success}>{props?.message}</div>;
  }
  return null;
}
