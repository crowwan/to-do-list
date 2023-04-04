import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import routerData from "./data/routerData";
import { setData } from "./features/dataSlice";
import Main from "./layouts/Main";
import LogInPage from "./pages/LogInPage";
import Template from "./pages/Template";
import Loading from "./ui/Loading";
import { getTodos } from "./api/todos";

const themes = {
  light: {
    mainColor: "#2564cf",
    bgColor: "#e1dfdd",
    navBgColor: "#82abf1",
    headerColor: "#2564cf",
    inputColor: "#f3f2f1",
    bgSubColor: "#fff",
    todoColor: "#f3f2f1",
    fontColor: "#323130",
    hover: "#fdfdfd",
  },
  dark: {
    mainColor: "#82abf1",
    bgColor: "#1E1E1E",
    navBgColor: "#1E1E1E",
    headerColor: "#252423",
    inputColor: "#252423",
    todoColor: "#252423",
    bgSubColor: "#5f5f5f",
    fontColor: "#fff",
    hover: "#3b3a39",
  },
};

function App() {
  // TODO: 테마 로컬 스토리지 연동
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("dark");
  const currentUser = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigation("/");
    } else {
      setIsLoading(true);
      getTodos()
        .then((res) => {
          dispatch(setData(res.data));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser]);
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                !currentUser ? <LogInPage /> : <Template setTheme={setTheme} />
              }
            >
              {routerData.map((a) => (
                <Route
                  key={a.name}
                  path={a.path}
                  element={<Main title={a.name} path={a.path} />}
                />
              ))}
            </Route>
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
