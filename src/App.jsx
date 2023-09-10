import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CheckOut from "./pages/CheckOut";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
