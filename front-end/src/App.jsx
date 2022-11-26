import NavBar from "./components/NavBar/NabBar"
import { Routes, Route } from "react-router-dom"
import Cliente from "./pages/Clients"
import RegisterClient from "./components/clients/RegisterClients"
import Books from "./pages/Books"
import Home from "./pages/Home"
import RegisterBook from "./components/Books/RegisterBook"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/clientes" element={<Cliente />} />
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/books" element={<Books />} />
        <Route path="/registerBook" element={<RegisterBook />} />
      </Routes>

    </div>
  )
}

export default App
