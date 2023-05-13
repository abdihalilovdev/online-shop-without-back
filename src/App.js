import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home/Home";
import Favorites from "./page/Favorites/Favorites";
import Basket from "./page/Basket";
import DetailProduct from "./page/DetailProduct";

function App() {
  return (
    <div className="App">
      < Header />
        <Routes>
            <Route path={'/'} element={ < Home/> }/>
            <Route path={'/favorites'} element={ < Favorites/> }/>
            <Route path={'/basket'} element={ < Basket/> }/>
            <Route path={'/product/detail/:productId'} element={ < DetailProduct/> }/>
        </Routes>
    </div>
  );
}

export default App;
