import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Notification from "../components/Notification/Notification";
import { uuid } from "../utils";

interface ToastData {
  id: string;
  message: string;
  variant: "success" | "error" | "warning" | "info";
}

const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    (message: string, variant: ToastData["variant"]) => {
      const id = uuid();
      setToasts((prevToasts) => [...prevToasts, { id, message, variant }]);
      setTimeout(() => {
        removeToast(id);
      }, 3000);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const Toast = () => {
    return ReactDOM.createPortal(
      <div className="toast-container">
        {toasts.map((toast) => (
          <Notification
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>,
      document.body
    );
  };

  return { addToast, Toast };
};

export default useToast;
