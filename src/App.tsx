import "./App.css";
import useToast from "./hooks/useToast";
function App() {
  const { addToast, Toast } = useToast();
  return (
    <>
      <button onClick={() => addToast("Success Message", "success")}>
        Add Success Toast
      </button>
      <button onClick={() => addToast("Warning Message", "warning")}>
        Add Warning Toast
      </button>
      <button onClick={() => addToast("Error Message", "error")}>
        Add Error Toast
      </button>
      <button onClick={() => addToast("Info Message", "info")}>
        Add Info Toast
      </button>
      <Toast />
    </>
  );
}

export default App;
