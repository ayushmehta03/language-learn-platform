import { Routes,Route, Navigate } from 'react-router'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import Notification from './pages/Notification'
import Onboarding from './pages/Onboarding'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import { Toaster } from 'react-hot-toast'
import { useQuery} from '@tanstack/react-query'
import { axiosInstance } from './lib/axios'
const App = () => {
  const { data:authData, isLoading, error } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      const res = await axiosInstance.get('/auth/me');
      return res.data;
    },
    retry: false
  });

const authUser=authData?.user
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