import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import Feed from "./Feed";
import Login from "./Login";
function App() {
  const user="Nitin";
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
