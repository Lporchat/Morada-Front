import { BrowserRouter, Route, Routes } from "react-router-dom"


import { GlobalStyle } from "./styles/global";
import { Comment } from "./components/Comment/Comment";
import { Home } from "./components/Home/home";


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/comment/:token" element={<Comment />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
