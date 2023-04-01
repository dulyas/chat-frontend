import './App.css'
import useCheckMobileScreen from './hooks/useMobileCheckScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const isMobile = useCheckMobileScreen()
  
  if (isMobile) {
    return (
        <RouterProvider router={router}/>
     )
  } else {
    return (
      <div>Use mobile device please </div>
    )
  }

}

export default App
