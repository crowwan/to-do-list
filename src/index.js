import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// TODO: basename 설정할 것 (.env에 설정 안 하면 localhost로 판단한다고 함 개발 시에는 상관없지만, 빌드 시에는 바꿔야함)
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);
