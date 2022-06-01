import React from "react";
import NavbarCom from "./components/NavbarCom/NavbarCom";
import FooterCom from "./components/FooterCom/FooterCom";
import HomeCom from "./pages/Home/HomeCom";
import {Switch, Route} from 'react-router-dom';
import AboutCom from "./pages/About/AboutCom";
import ProductCom from './pages/Product/ProductCom'


function App() {
    return (
        <div className="App">
            <NavbarCom/>
            <Switch>
                <Route exact path="/">
                    <HomeCom/>
                </Route>
                <Route path="/About">
                    <AboutCom/>
                </Route>
                <Route path="/Products">
                    <ProductCom/>
                </Route>
            </Switch>
            <FooterCom/>
        </div>
    );
}


export default App;
