import {
  IoMdCheckmark,
  IoMdClose,
  IoMdInformation,
  IoMdWarning,
} from "react-icons/io";
import "./style.css";

interface ToastProps {
  message: string;
  variant: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const Notification: React.FC<ToastProps> = ({ message, variant, onClose }) => {
  return (
    <div className={`toast toast-${variant}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {variant === "success" && <IoMdCheckmark />}
        {variant === "error" && <IoMdClose />}
        {variant === "warning" && <IoMdWarning />}
        {variant === "info" && <IoMdInformation />}
        <span>{message}</span>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default Notification;
