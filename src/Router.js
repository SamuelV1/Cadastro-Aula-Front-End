import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aulas from "./pages/Aulas/Aulas";
import Login from "./pages/Login/Login";



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Aulas} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Register" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;