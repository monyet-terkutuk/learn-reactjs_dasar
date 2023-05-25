import "./App.css";
import Introduction from "./components/introduction";
import Profile from "./components/profile";

function App() {
  return (
    <div >
      <Profile />
      <Introduction name="Gabriel Yonathan"/>
      <Introduction name="Siti Ayuni"/>
    </div>
  );
}

export default App;
