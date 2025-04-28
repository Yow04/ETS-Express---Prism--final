import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PublicRoute({ children }) {
  const { apiKey } = useAuth();

  if (apiKey) {
    // Mengarahkan ke halaman dashboard jika sudah login
    return <Navigate to="/dashboard" replace />;
  }

  return children;
} 