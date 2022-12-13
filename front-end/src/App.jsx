import { Routes, Route } from "react-router-dom"
import Cliente from "./pages/Clients"
import RegisterClient from "./components/clients/RegisterClients"
import Books from "./pages/Books"
import RegisterBook from "./components/Books/RegisterBook"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { UserStorage } from "../UserContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import Orders from "./pages/Orders"
import RegisterOrdens from "./components/orders/RegisterOrdens"

function App() {

  return (
    <div>

      <UserStorage>
        <Routes>
          <Route
            path="/"
            exact
            element={<Login />}
          />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app/clientes"
            element={
              <ProtectedRoute>
                <Cliente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app/registerClient"
            element={
              <ProtectedRoute>
                <RegisterClient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app/books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app/registerBook"
            element={
              <ProtectedRoute>
                <RegisterBook />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/orders"
            element={
              <ProtectedRoute>
                <Orders />  
              </ProtectedRoute>
            }
          />
           <Route
            path="/app/registerOrders"
            element={
              <ProtectedRoute>
                <RegisterOrdens />  
              </ProtectedRoute>
            }
          />
        </Routes>


      </UserStorage>
    </div>
  )
}

export default App
