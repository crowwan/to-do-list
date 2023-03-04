import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import ImportantPage from "./pages/ImportantPage";
import PlannedPage from "./pages/PlannedPage";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/today" element={<TodayPage />} />
        <Route path="/important" element={<ImportantPage />} />
        <Route path="/planned" element={<PlannedPage />} />
      </Routes>
    </>
  );
}

export default App;
