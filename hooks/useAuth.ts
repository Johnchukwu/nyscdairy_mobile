

import { useAuthContext } from "../context/AuthContext";

export function useAuth() {
  const { state, setAuthFromLogin, logout } = useAuthContext();
  return {
    user: state.user,
    token: state.token,
    loading: state.loading,
    setAuthFromLogin,
    logout
  };
}
