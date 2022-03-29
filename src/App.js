import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import HomePage from "./Homepage";
const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Routes>
    // BEM naming convention

          {!user ? (
            <Route path="/" element={<Login />} />
          ) : (
            <>
              <Route exact path="/homepage" element={<HomePage />} />
              <Route exact path='/' element={<HomePage />} />
            </>
          )}

        </Routes>
      </Router>
    </div>
  );
}

export default App;