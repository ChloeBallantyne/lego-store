import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SetLoader from "./containers/SetLoader/SetLoader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<SetLoader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
