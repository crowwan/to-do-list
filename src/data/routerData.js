import TodayPage from "../pages/TodayPage";
import { BsSun } from "react-icons/bs";
import { AiOutlineCalendar, AiFillStar } from "react-icons/ai";
import EverydayPage from "../pages/EverydayPage";
import ImportantPage from "../pages/ImportantPage";
const routerData = [
  {
    name: "오늘 할 일",
    path: "today",
    element: <TodayPage />,
    icon: <BsSun />,
  },
  {
    name: "매일 할 일",
    path: "everyday",
    element: <EverydayPage />,
    icon: <AiOutlineCalendar />,
  },
  {
    name: "중요한 일",
    path: "important",
    element: <ImportantPage />,
    icon: <AiFillStar />,
  },
];

export default routerData;
