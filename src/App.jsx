import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import ImportantPage from "./pages/ImportantPage";
import LogInPage from "./pages/LogInPage";
import PlannedPage from "./pages/PlannedPage";
import Template from "./pages/Template";
import TodayPage from "./pages/TodayPage";

function App() {
  const [test, setTest] = useState("");
  console.log("render");
  useEffect(() => {
    // (async () => {
    //   const data = await fetch("http://localhost:8000").then((res) =>
    //     res.json()
    //   );
    //   setTest(data);
    // })();
    console.log(document.cookie);
  }, []);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/user" element={<Template />}>
          <Route path="today" element={<TodayPage />} />
          <Route path="important" element={<ImportantPage />} />
          <Route path="planned" element={<PlannedPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
