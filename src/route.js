import React from "react"


import Home from "./components/home"
const Navbar = React.lazy(() => import("./components/navbar"))

const AboutUs = React.lazy(() => import("./components/about"))

const NotFound = React.lazy(() => import("./components/notFound"))

const UserProfile = React.lazy(() => import("./components/userProfile"))

const SearchUser = React.lazy(() => import("./components/searchUser"))

const Login = React.lazy(() => import("./components/login"))

const AuthProfile = React.lazy(() => import("./components/authProfile"))

const Users = React.lazy(() => import("./components/users"))

const RepoDetail = React.lazy(() => import("./components/repoDetail"))


export const appRoutes = [
    {
        path: "/",
        component: Home,
        reqiresAuth: false
    }, {
        path: "/login",
        component: Login,
        reqiresAuth: false
    }, {
        path: "/users",
        component: Users,
        reqiresAuth: false
    }, {
        path: "/authProfile",
        component: AuthProfile,
        reqiresAuth: true
    }, {
        path: "/users/user/:username",
        component: UserProfile,
        reqiresAuth: false
    }, {
        path: "/search",
        component: SearchUser,
        reqiresAuth: false
    }, {
        path: "/about",
        component: AboutUs,
        reqiresAuth: false
    }, {
        path: "/repo-detail/:name/:username",
        component: RepoDetail,
        reqiresAuth: false,
    }, {
        path: "*",
        component: NotFound,
        reqiresAuth: false
    }
]