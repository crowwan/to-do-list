import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import routerData from "./data/routerData";
import Main from "./layouts/Main";
import LogInPage from "./pages/LogInPage";
import Template from "./pages/Template";

function App() {
  const isLogin = useSelector((s) => s.isLogin);
  console.log("render");
  useEffect(() => {
    // (async () => {
    //   const data = await fetch("http://localhost:8000").then((res) =>
    //     res.json()
    //   );
    //   setTest(data);
    // })();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={!isLogin ? <LogInPage /> : <Template />}>
          {routerData.map((a) => (
            <Route
              key={a.name}
              path={a.path}
              element={<Main title={a.name} path={a.path} />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
