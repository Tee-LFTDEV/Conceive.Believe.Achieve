import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BadgesPage from './pages/BadgesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';
import LandingPage from './pages/LandingPage';
import { AppProvider } from './context/AppContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isPaid = localStorage.getItem('isPaid') === 'true';
  
  if (!isAuthenticated) return <Navigate to="/landing" />;
  if (!isPaid) return <Navigate to="/pay" />;
  
  return <>{children}</>;
};

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/badges" element={
            <ProtectedRoute>
              <Layout>
                <BadgesPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Layout>
                <SettingsPage />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
