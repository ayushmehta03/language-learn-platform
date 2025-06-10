import { Routes,Route } from 'react-router'
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
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axiosInstance.get('/auth/me');
      return res.data;
    },
    retry: false
  });

  console.log({ data });

  return (
    <div data-theme="night">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/call' element={<CallPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};
export default App