import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import routerData from "./data/routerData";
import { setData } from "./features/dataSlice";
import Main from "./layouts/Main";
import LogInPage from "./pages/LogInPage";
import Template from "./pages/Template";
import { getTodos } from "./util/todos";

function App() {
  // TODO: login slice delete

  const currentUser = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  console.log("render");
  useEffect(() => {
    if (!currentUser) {
      navigation("/");
    } else {
      getTodos()
        .then((res) => {
          dispatch(setData(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser]);
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
