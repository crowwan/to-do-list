import TodayPage from "../pages/TodayPage";
import { BsSun } from "react-icons/bs";
import { AiOutlineCalendar, AiFillStar } from "react-icons/ai";
import PlannedPage from "../pages/PlannedPage";
import ImportantPage from "../pages/ImportantPage";
const routerData = [
  {
    name: "오늘 할 일",
    path: "today",
    element: <TodayPage />,
    icon: <BsSun />,
  },
  {
    name: "계획된 일",
    path: "planned",
    element: <PlannedPage />,
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
