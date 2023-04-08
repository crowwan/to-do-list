import axios from "axios";

// const BASE_URL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const getTodos = () => {
  return axios.get(`/todos`);
};

const addTodo = (data) => {
  return axios.post(`/todos`, data);
};

const updateTodo = (id, data) => {
  return axios.post(`/todos/${id}`, data);
};

const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };

// [1,2,4]

// const [data, setData] = useState([])

// fetch('url',{
//   method:'delete'
// }).then(res =>
//   res.json()).then(res => {
//     const newData = data.filter(a => a.id !== id);
//     setData(newData);
// })
// 서버에 저장된 데이터랑 클라이언트에서 사용하고 있는 상태랑 일치를 시켜야한다.
// 서버에서 만약에 삭제된 이후에 전체데이터를 다시준다 -=>
// 그걸 쓰거나 아니면 우리가 쓰던 상태를 가지고
// 직접 삭제해서 쓰거나.

// 함수를 쓰는데 지금 없는 외부의 코드를 써야한다. 방법이 두개다. => 인자로 받는다.
// 서버요청에 대한 함수였다. 그러면 그냥 return fetch().then()

// setTodos가 있는 곳에서 어쨌든 f().then(res => setTodos)

// get
// fetch(url).then(res => res.json()).then((res) => { setTodo(res) })
