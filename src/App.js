import logo from './logo.svg';
import './App.css';
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import ProductPag from "./page/ProductPag";
import ProductView from "./page/Product_view";

function App() {

    useEffect(() => {

    }, []);

  return (
    <div>
        <Routes>
            <Route path="" element={<HomePage/>}/>{/*스프링 부트에서 본 거 같은*/}
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/product" element={<ProductPag/>}/>
            <Route path="/product/:id/:mon" element={<ProductView/>}/>
        </Routes>
      {/*<HomePage/>*/}
      {/*<AboutPage/>*/}
    </div>
  );
}

export default App;
