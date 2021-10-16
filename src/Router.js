import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aulas from "./pages/Aulas/Aulas";
import Login from "./pages/Login";



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Aulas} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;