import alerts from "./Alerts.module.css";
import { useState } from "react";

export function Success(props) {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const openSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  const openError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <div className={showSuccess ? alerts.success : alerts.hide}>
      <p>{props.message}</p>
    </div>
  );
}

export function ErrorAlert(props) {
  return (
    <div className={showError ? alerts.error : alerts.hide}>
      <p>{props.message}</p>
    </div>
  );
}
