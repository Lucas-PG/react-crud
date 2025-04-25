import "styles/Toast.css";

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <span>{message}</span>
        <button onClick={onClose} className="toast-close">
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
