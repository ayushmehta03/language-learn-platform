import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import Notification from './pages/Notification'
import Onboarding from './pages/Onboarding'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import { Toaster } from 'react-hot-toast'
import useAuthUser from './hooks/useAuthUser'
import PageLoader from './components/PageLoader'

const App = () => {
  const { isLoading, authUser } = useAuthUser()

  const isAuthenticated = Boolean(authUser)
  const isOnboarded = authUser?.isOnboarded

  if (isLoading) return <PageLoader />

  return (
    <div data-theme="night">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Home />
            ) : (
              <Navigate to={!isAuthenticated ? '/login' : '/onboarding'} />
            )
          }
        />

        {/* Signup: Only for unauthenticated users */}
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />}
        />

        {/* Login: Only for unauthenticated users */}
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* Onboarding: Only for authenticated and not-yet-onboarded users */}
        <Route
          path="/onboarding"
          element={
            isAuthenticated?(
              !isOnboarded?(
                <Onboarding />
              ):(
                <Navigate to="/" />
              )
            ):(
              <Navigate to="/login" />
            )
          }
        />

        {/* Notifications: Only for authenticated users */}
        <Route
          path="/notifications"
          element={isAuthenticated ? <Notification /> : <Navigate to="/login" />}
        />

        {/* Chat: Only for authenticated users */}
        <Route
          path="/chat"
          element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
        />

        {/* Call: Only for authenticated users */}
        <Route
          path="/call"
          element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
