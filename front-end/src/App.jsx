import { Routes, Route } from "react-router-dom"
import Cliente from "./pages/Clients"
import RegisterClient from "./components/clients/RegisterClients"
import Books from "./pages/Books"
import RegisterBook from "./components/Books/RegisterBook"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { UserStorage } from "../UserContext"

function App() {

  return (
    <div>

      <UserStorage>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="app" element={<Home />} />
          <Route path="/app/clientes" element={<Cliente />} />
          <Route path="/app/registerClient" element={<RegisterClient />} />
          <Route path="/app/books" element={<Books />} />
          <Route path="/app/registerBook" element={<RegisterBook />} />
        </Routes>

      </UserStorage>
    </div>
  )
}

export default App
