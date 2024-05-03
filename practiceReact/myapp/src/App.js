import './App.css';
import DisplayCards from './components/cardDisplay';
import Homepage from './components/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  let router=createBrowserRouter([
    {
      path:'/',
      element:<DisplayCards/>
    },
    {
      path:'/home',
      element:<Homepage/>
    },

  ])
  return (
    <div className="App">
     
     
        {/* <DisplayCards/> */}
    
    </div>
  );
}

export default App;
