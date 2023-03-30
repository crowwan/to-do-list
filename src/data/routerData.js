import { BsSun } from "react-icons/bs";
import { AiOutlineCalendar, AiFillStar } from "react-icons/ai";

const routerData = [
  {
    name: "오늘 할 일",
    path: "today",
    icon: <BsSun />,
  },
  {
    name: "매일 할 일",
    path: "everyday",
    icon: <AiOutlineCalendar />,
  },
  {
    name: "중요한 일",
    path: "important",
    icon: <AiFillStar />,
  },
];

export default routerData;
