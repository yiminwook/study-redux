import { logIn } from "@/redux/actions/user";
import { useSelector, useDispatch } from "@/redux/store";

const App = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);

  const onClick = () => {
    dispatch(logIn({ data: 1 }));
  };

  console.log(userData);

  return (
    <div className="App">
      <h1>hello {userData ? userData.name : ""}</h1>
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default App;
