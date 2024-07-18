import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, { useState, Suspense } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import Home from "./components/home";


import { appRoutes } from "./route";




const Navbar = React.lazy(() => import("./components/navbar"))

const AboutUs = React.lazy(() => import("./components/about"))

const NotFound = React.lazy(() => import("./components/notFound"))

const UserProfile = React.lazy(() => import("./components/userProfile"))

const SearchUser = React.lazy(() => import("./components/searchUser"))

const Login = React.lazy(() => import("./components/login"))

const AuthProfile = React.lazy(() => import("./components/authProfile"))

const Users = React.lazy(() => import("./components/users"))








function App() {

  const [username, setUsername] = useState("")

  const [isLogged, setIsLogged] = useState(false)

  const location = useLocation()

  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
          <Suspense fallback={() => <h1>Loading ...</h1>}>
            <>
              <Navbar isLogged={isLogged} />
              <Routes location={location}>
                {appRoutes.map((route) => {
                  if (route.reqiresAuth && !isLogged) {
                    return <Route key={route.path} exact path={route.path} element={< Navigate replace to={"/login"} />} />
                  } else {
                    return <Route key={route.path} exact path={route.path} element={<route.component setIsLogged={setIsLogged} setUsername={setUsername} username={username} />} />
                  }
                })}
              </Routes>
            </>
          </Suspense>

        </CSSTransition>
      </SwitchTransition>
    </div >
  );
}

export default App;
