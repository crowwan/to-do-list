import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import ImportantPage from "./pages/ImportantPage";
import PlannedPage from "./pages/PlannedPage";
import Template from "./pages/Template";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="today" element={<TodayPage />} />
          <Route path="important" element={<ImportantPage />} />
          <Route path="planned" element={<PlannedPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
