import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" , age : "23" , bio : "Full Stack devolper"};

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
