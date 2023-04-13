import './App.css'
import useCheckMobileScreen from './hooks/useMobileCheckScreen';
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";

import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import ChatApp from './components/Chat/ChatApp';

import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect } from 'react';
import { Context } from './main'

// import { IUser } from './models/IUser'

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
]);

function App() {

  const isMobile = useCheckMobileScreen()
  const {store} = useContext(Context)

  const checkAuth = async (): Promise<void> => {
    if (localStorage.getItem('token')) {
      await store.checkAuth()
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])




  if (isMobile) {

    if (store.isLoadingCheckAuth) {
      return (
        <div>
          Loading
        </div>
      )
    }

    return (
        <RouterProvider router={router}/>
     )
  } else {
    return (
      <div>Use mobile device please </div>
    )
  }

}

export default observer(App)
