import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { Home } from "./Pages/home"
import { Cadastro } from "./Pages/cadastro"
import { Login } from "./Pages/login"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path="/cadastro" element = {<Cadastro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
