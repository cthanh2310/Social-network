import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import {Routes, Route } from "react-router-dom"
import AppReducer from './reducers/AppReducer';
import { useReducer } from "react";

function App() {
  const initialState = {user: null, posts: []};
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <div className="container">
      <Header />
      <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/" element={<Main />}>
            </Route>
            <Route path="*" element={<PageNotFound />}>
            </Route>
      </Routes>
    </div>  
  );
}

export default App;
