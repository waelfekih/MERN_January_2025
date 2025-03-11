import { AppProvider } from "./components/AppContext";
import Navbar from "./components/NavBar";
import NameInput from "./components/NameInput";
function App() {
  return (
    <AppProvider>
      <Navbar />
      <div className=" mt-3">
        <NameInput />
      </div>
    </AppProvider>
  );
}

export default App;
