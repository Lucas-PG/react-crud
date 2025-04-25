import { useState } from "react";
import Toast from "components/Toast";

export const useToast = () => {
  const [message, setMessage] = useState("");

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 10000);
  };

  const ToastComponent = () => (
    <Toast message={message} onClose={() => setMessage("")} />
  );

  return [ToastComponent, showToast];
};
