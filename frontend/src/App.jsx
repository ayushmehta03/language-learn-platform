import { Routes,Route, Navigate } from 'react-router'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import Notification from './pages/Notification'
import Onboarding from './pages/Onboarding'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import { Toaster } from 'react-hot-toast'
import useAuthUser from './hooks/useAuthUser'
auth
const App = () => {
 
const {isLoading,authUser}=useAuthUser()



if(isLoading) return <PageLoader />
  return (
    <div data-theme="night">
      <Routes>
        <Route path='/' element={authUser?<Home />: <Navigate to='/login' />} />
        <Route path='/signup' element={!authUser?<SignUp />: <Navigate to='/' />} />
        <Route path='/login' element={!authUser? <LoginPage />:<Navigate to='/' />} />
        <Route path='/notifications' element={ authUser?  <Notification />:<Navigate to='/login' />} />
        <Route path='/onboarding' element={  authUser? <Onboarding />:  <Navigate to='/login' />} />
        <Route path='/chat' element={  authUser? <ChatPage />:<Navigate to='/login' />} />
        <Route path='/call' element={ authUser?   <CallPage />:<Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  );
};
export default App