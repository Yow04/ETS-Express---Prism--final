import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AddRecipe from '../pages/AddRecipe';
import MyRecipes from '../pages/MyRecipes';
import EditRecipe from '../pages/EditRecipe';
import RandomRecipe from '../pages/RandomRecipe';

function Layout({ children }) {
  const location = useLocation();
  const { apiKey, logout } = useAuth();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/dashboard" className="text-2xl font-bold text-blue-600">
                  RecipeCook
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/dashboard'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/my-recipes"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/my-recipes'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  My Recipes
                </Link>
                <Link
                  to="/random-recipe"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/random-recipe'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Random Recipe
                </Link>
                <a
                  href="http://localhost:3000/api-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-all duration-200 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  API Docs
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                API Key: <span className="font-mono text-blue-600 font-medium">{apiKey}</span>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-recipe"
              element={
                <ProtectedRoute>
                  <AddRecipe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-recipes"
              element={
                <ProtectedRoute>
                  <MyRecipes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-recipe/:id"
              element={
                <ProtectedRoute>
                  <EditRecipe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/random-recipe"
              element={
                <ProtectedRoute>
                  <RandomRecipe />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
