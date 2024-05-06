import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useLogOut = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore((state) => state.logout);

    const handleLogOut = async () => {
        try{
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
        } catch {
            showToast("Error", error.message, "error");
        }
    }
  return {handleLogOut, isLoggingOut, error}
}

