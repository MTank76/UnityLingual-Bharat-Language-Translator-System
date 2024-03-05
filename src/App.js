import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import SpeechApp from "./components/SpeechApp";
import TranslateApp from "./components/TranslateApp";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Maps from './components/Maps';
function App() {
  

    const router = createBrowserRouter([
      {
        path:"/",
        element: <><Navbar /><Home /></>
      },
      {
        path:"/SpeechApp",
        element: <><Navbar /><SpeechApp /></>
      },
      {
        path:"/TranslateApp",
        element: <><Navbar /><TranslateApp /></>
      },
      {
        path:"/About",
        element: <><Navbar /><About /></>
      },
      {
        path:"/Maps",
        element: <><Navbar /><Maps /></>
      },
    ])

    return(
      <>
      
      <RouterProvider router ={router}/>
      </>
    )
  
}

export default App;


