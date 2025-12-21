
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import { useThemeMode } from 'flowbite-react';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Login from './pages/auth/Login';
// import ServiceLevelAgreement from './pages/sla/ServiceLevelAgreement';
import TermsAndConditions from './pages/terms/TermsAndConditions';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import EscrowPolicy from './pages/escrow/EscrowPolicy';
import EscrowPolicyUserFriendly from './pages/escrow/EscrowPolicyUserFriendly';
import NotFound from './pages/notFound/NotFound';
import RefundPolicy from './pages/policy/RefundPolicy';
import TicketingTerms from './pages/terms/TicketingTerms';
import OrganizerTerms from './pages/terms/OrganizerTerms';

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
      <Router>
        {/* <ScrollToTop />  */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="/admin" element={
                <ProtectedRoute requireAdmin>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/sla" element={<ServiceLevelAgreement />} /> */}
              <Route path="terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/escrow-policy" element={<EscrowPolicy />} />
              <Route path="/escrow-guide" element={<EscrowPolicyUserFriendly />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/ticketing-terms" element={<TicketingTerms />} />
              <Route path="/organizer-terms" element={<OrganizerTerms />} />
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

// ✅ ScrollToTop Component - Scrolls to top on route changes
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Scroll to top instantly when route changes
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

export default App
