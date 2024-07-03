import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
