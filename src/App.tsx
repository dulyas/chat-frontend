import "./App.css";
import useCheckMobileScreen from "./hooks/useMobileCheckScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login/Login";
import MainPage from "./routes/MainPage/MainPage";
import ChatApp from "./routes/ChatApp/ChatApp";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import Room, { roomLoader } from "./routes/Room/Room";
import { observer } from "mobx-react-lite";

import socketService from "./service/SocketService";

// import { lazy } from 'react';

// import { IUser } from './models/IUser'

// const MainPage = lazy(() => import('./components/MainPage/MainPage'))
// const Login = lazy(() => import('./components/Login/Login'))
// const ChatApp = lazy(() => import('./components/ChatApp/ChatApp'))

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/chat",
		element: <ChatApp />,
	},
	{
		path: "/chat/:roomId",
		element: <Room />,
		loader: roomLoader,
	},
]);

function App() {
	const isMobile = useCheckMobileScreen();
	const { store } = useContext(Context);

	const checkAuth = async (): Promise<void> => {
		if (localStorage.getItem("token")) {
			await store.checkAuth();
		} else {
			store.setLoading(false);
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	if (isMobile) {
		if (store.isLoading) {
			console.log("loading");
			return <div>Loading</div>;
		}
		console.log("loaded");
		return <RouterProvider router={router} />;
	} else {
		console.log("desktop");
		return <div>Use mobile device please </div>;
	}
}

export default observer(App);
