import "./App.css";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import StatusMessage from "./components/StatusMessage";
import CreateUser from "./components/Form/CreateUser";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SimpleComponentWithTitle from "./components/hoc/index";
import TimerComponent  from "./components/hooks/index";
import { BrowserRouter, Router } from 'react-router-dom';
import Routers from "./Routers";
import Main from "./components/pages/main";
import ContestApi from "./components/contestapi/ContesApi";
import Index from "./components/Axios";


function App() {
  return (
    <div className="App">
{/*            
      <Buttons/>
      <Counter/>
      <StatusMessage/> */}

      {/* <CreateUser />

      <SimpleComponentWithTitle/>
<TimerComponent /> */}
<BrowserRouter>
    <Main/>
      <Routers/>
      <ContestApi/>
      <Index/>
    </BrowserRouter>
    </div>
  );
}

export default App;
