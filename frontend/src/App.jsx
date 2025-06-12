import { Routes, Route, Navigate } from "react-router-dom"; // ✅ react-router-dom
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Notification from "./pages/Notification.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import Onboarding from "./pages/Onboarding.jsx";

import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";

const App = () => {
const { isLoading, authUser } = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  // Debug Log — See values in console
  console.log({ isLoading, isAuthenticated, isOnboarded });

  // Loading State
  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              isOnboarded ? <Home /> : <Navigate to="/onboarding" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              isOnboarded ? <Navigate to="/" /> : <Navigate to="/onboarding" />
            ) : (
              <SignUp />
            )
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              isOnboarded ? <Navigate to="/" /> : <Navigate to="/onboarding" />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Notification />
            ) : (
              <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
            )
          }
        />

        <Route
          path="/call"
          element={
            isAuthenticated && isOnboarded ? (
              <CallPage />
            ) : (
              <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
            )
          }
        />

        <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <ChatPage />
            ) : (
              <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
            )
          }
        />

        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              isOnboarded ? <Navigate to="/" /> : <Onboarding />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Toaster position="top-center" />
    </div>
  );
};

export default App;
