import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/">Main</NavLink>
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/posts">Posts</NavLink>
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/login">Login</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />

          <Route path='/posts/:id' element={<SinglePost />}/>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
