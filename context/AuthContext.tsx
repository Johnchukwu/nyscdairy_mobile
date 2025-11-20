
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import type { AuthState, User } from "../types/auth";
import {
  getToken,
  saveToken,
  clearToken
} from "../services/storage/tokenStorage";

type Ctx = {
  state: AuthState;
  setAuthFromLogin: (token: string, user: User) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<Ctx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    loading: true
  });

  useEffect(() => {
    const init = async () => {
      const t = await getToken();
      if (!t) {
        setState({ user: null, token: null, loading: false });
        return;
      }
      setState({
        user: { id: "1", fullName: "Demo User", email: "demo@mail.com" },
        token: t,
        loading: false
      });
    };
    init();
  }, []);

  const setAuthFromLogin = async (token: string, user: User) => {
    await saveToken(token);
    setState({ user, token, loading: false });
  };

  const logout = async () => {
    await clearToken();
    setState({ user: null, token: null, loading: false });
  };

  return (
    <AuthContext.Provider value={{ state, setAuthFromLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing");
  return ctx;
}
