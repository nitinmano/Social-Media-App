import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import Feed from "./Feed";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
  const [{ user },dispatch] = useStateValue();
  

  return (
    // BEM naming convention
    <div className="app">
      {!user?<Login/>:(
        <>
        {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
      </div>
      </>
      )}
      </div>
  );
}

export default App;
