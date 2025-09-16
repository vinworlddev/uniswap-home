
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import { useThemeMode } from 'flowbite-react';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Login from './pages/auth/Login';

type ThemeMode = "light" | "dark";
const App = () => {
  const { mode, setMode } = useThemeMode();

  // Only run once on first mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode | null;
    if (savedMode) {
      setMode(savedMode); // set once
    }
  }, []); // 👈 no dependencies here!

  // Save to localStorage whenever mode changes
  useEffect(() => {
    if (mode) {
      localStorage.setItem("theme-mode", mode);
    }
  }, [mode]);


  return (

    <>
      {/* <Router>
        <AuthProvider>
          <Routes>
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <Layout />
              </ProtectedRoute>
            }>
              
               
              <Route path="admin" element={<Admin />} />
            </Route>

           
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/unauthorized"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
                    <p className="text-gray-600 mt-2">You don't have permission to access this page.</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </AuthProvider>
      </Router> */}
      <BrowserRouter>
        <AuthProvider>
          {/* <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route path="/unauthorized" element={<p>Unauthorized</p>} />
            <Route path="/login" element={<p>Login page here</p>} />
          </Routes> */}

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="/admin" element={
                <ProtectedRoute requireAdmin>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<Login />} />
              <Route
                path="/unauthorized"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
                      <p className="text-gray-600 mt-2">You don't have permission to access this page.</p>
                    </div>
                  </div>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
