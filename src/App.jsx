import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import routerData from "./data/routerData";
import LogInPage from "./pages/LogInPage";
import Template from "./pages/Template";

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
          {routerData.map((a) => (
            <Route path={a.path} element={a.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
