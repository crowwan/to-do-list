import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import routerData from "./data/routerData";
import Main from "./layouts/Main";
import LogInPage from "./pages/LogInPage";
import Template from "./pages/Template";

function App() {
  // TODO: login slice delete
  const isLogin = useSelector((s) => s.isLogin);
  const currentUser = useSelector((s) => s.user);
  const navigation = useNavigate();
  console.log("render");
  useEffect(() => {
    if (!currentUser) {
      navigation("/");
    }
  }, []);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={!currentUser ? <LogInPage /> : <Template />}>
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
