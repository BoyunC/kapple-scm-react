import "./App.css";
import Headerbar from "./components/HeaderBar";
import SideBar from "./components/SideBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider, useAppContext } from "./Context";

import routes from "./routes";
import { useEffect } from "react";

function App() {
    return (
        <AppProvider>
            <Router>
                <AppContent />
            </Router>
        </AppProvider>
    );
}

function AppContent() {
    const { navbarCollapsed } = useAppContext();

    useEffect(() => {
        const content = document.querySelector(".content");

        if (content) {
            if (navbarCollapsed) {
                content.style.marginLeft = "0px";
                content.style.paddingRight = "10px";
                content.style.paddingLeft = "10px";
            } else {
                content.style.marginLeft = "254px";
            }
        }
    }, []);

    return (
        <div className='app-container'>
            <SideBar />
            <Headerbar />

            <div className='content'>
                <Switch>
                    {routes.map((route) => {
                        return <Route exact key={route.path} path={route.path} component={route.component} />;
                    })}
                </Switch>
            </div>
        </div>
    );
}

export default App;
