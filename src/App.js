import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

import Header from "./components/Header";
import CustomDayTracker from "./pages/CustomDayTracker";
import ExpenseTracker from "./pages/ExpenseTracker";
import Page from "./pages/Page";
import Alert from "./Alert";
import LiveOrders from "./LiveOrders";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

function App() {
  const { theme, setShowAlert } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />

      {/* --- Revisiting useReducer() Hook --- */}
      {/* <ExpenseTracker /> */}

      {/* --- Tracking Work Days with Custom Hook --- */}
      {/* <CustomDayTracker /> */}

      {/* --- Component Composition
      <Alert>
        <h4>Delete Account</h4>

        <p>
          If you delete the account, you will no longer be able to order your
          favorite delicious foodfrom Little Lemon
        </p>
        <button className="btn-del" onClick={() => setShowAlert(false)}>
          Delete
        </button>
      </Alert>


      <button className="btn-del" onClick={() => setShowAlert(true)}>
        Unsubscribe
      </button>

       --- */}
      {/* --- LiveOrders --- */}
      {/* <LiveOrders /> */}

      {/* --- FeedBackForm --- */}
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
