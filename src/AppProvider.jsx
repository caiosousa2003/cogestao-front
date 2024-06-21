import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes></Routes>
      <ToastContainer position="top-center" autoClose={3000} pauseOnFocusLoss={false}/>
    </div>
  );
}
export default App;
